import { DateTime } from './luxon.js';

const now = DateTime.now();
const formattedDateTime = now.toFormat('MMMM dd, yyyy - hh:mm:ss a');

const datetimeElement = document.getElementById('datetime');
datetimeElement.textContent = formattedDateTime;