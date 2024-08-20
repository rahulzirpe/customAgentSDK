// Initialize the LivePerson SDK with your credentials
/*lpTag.agentSDK.init({
    //notificationCallback: notificationHandler
    //accountId: 'your-account-id', // Replace with your LivePerson account ID
    //accessToken: 'your-access-token' // Replace with your LivePerson access token
});*/

// Function to get the date in dd-mm-yyyy format
function getFormattedDate(offsetDays) {
    const today = new Date();
    today.setDate(today.getDate() + offsetDays);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to set slotsData with dynamic dates
function getDynamicSlotsData() {
    const tomorrow = getFormattedDate(1);
    const dayAfterTomorrow = getFormattedDate(2);

    console.log("Tomorrow" + [tomorrow]);

    return {
        [tomorrow]: [
            { "slot": "10:00 AM" },
            { "slot": "11:00 AM" },
            { "slot": "01:00 PM" },
            { "slot": "03:00 PM" }
        ],
        [dayAfterTomorrow]: [
            { "slot": "09:00 AM" },
            { "slot": "12:00 PM" },
            { "slot": "02:00 PM" },
            { "slot": "04:00 PM" }
        ]
    };
}

// Set the dynamic slots data
const slotsData = getDynamicSlotsData();

document.getElementById('generateButton').addEventListener('click', function () {
    const preferredDateInput = document.getElementById('preferredDate').value;
    const [year, day, month] = preferredDateInput.split('-');
    const preferredDate = `${month}-${day}-${year}`;

    const quickRepliesContainer = document.getElementById('quickRepliesContainer');
    quickRepliesContainer.innerHTML = ''; // Clear previous inputs

    console.log('Preferred Date:', preferredDate);

    if (slotsData[preferredDate]) {
        const slots = slotsData[preferredDate];
        console.log('Slots for selected date:', slots);

        slots.forEach((slot, index) => {
            const label = document.createElement('label');
            label.innerText = `Slot ${index + 1}:`;

            const input = document.createElement('input');
            input.type = 'text';
            input.value = slot.slot;
            input.disabled = true; // Make the text field read-only

            quickRepliesContainer.appendChild(label);
            quickRepliesContainer.appendChild(input);
            quickRepliesContainer.appendChild(document.createElement('br'));
        });

        document.getElementById('sendButton').style.display = 'block';
    } else {
        alert('No slots available for the selected date.');
        console.log('No slots found for:', preferredDate);
    }
});

document.getElementById('sendButton').addEventListener('click', function () {
    const quickReplies = [];

    const inputs = document.querySelectorAll('#quickRepliesContainer input[type="text"]');
    inputs.forEach((input, index) => {
        quickReplies.push({ title: input.value, payload: `quick_reply_${index + 1}` });
    });

    if (quickReplies.length > 0) {
        sendQuickReplies(quickReplies);
    } else {
        alert('No slots available.');
    }
});

function sendQuickReplies(quickReplies) {
    try {
        const data = {
            text: "Please select any timeslot:",
            quickReplies: {
                "type": "quickReplies",
                "itemsPerRow": 3,
                "replies": quickReplies.map((reply) => ({
                    "type": "button",
                    "tooltip": reply.title,
                    "title": reply.title,
                    "click": {
                        "actions": [
                            {
                                "type": "publishText",
                                "text": reply.title
                            }
                        ],
                        "metadata": [
                            {
                                "type": "ExternalId",
                                "id": reply.payload
                            }
                        ]
                    }
                }))
            }
        };

        const notifyWhenDone = function (err) {
            if (err) {
                console.error('Error sending quick replies:', err);
            }
        };

        const cmdName = lpTag.agentSDK.cmdNames.write;
        lpTag.agentSDK.command(cmdName, data, notifyWhenDone);

        alert('Quick replies sent successfully!');
    } catch (error) {
        console.error('Error sending quick replies:', error);
        alert('Error sending quick replies.');
    }
}
