/* eslint-disable max-len */
const votingOptions = [
  {
    'name': 'Agree',
    'explained': 'I agree to the proposal as it currently stands',
    'color': '#008800',
    'symbol': '\u25EF',
  },
  {
    'name': 'Reservations',
    'explained': 'I do not oppose the proposal but I wish to register reservations in the result of the call',
    'color': '#F4BB3D',
    'symbol': '\u25AD',
  },
  {
    'name': 'Standaside',
    'explained': 'I do not oppose the porposal but I do not support it either: I won\'t spend energy into implementing it',
    'color': '#EB7201',
    'symbol': '\u2731',
  },
  {
    'name': 'Principled objection',
    'explained': 'I oppose the proposal but I commit to work with the proposing party to find a solution that works for all',
    'color': '#D50100',
    'symbol': '\u25C3',
  },
];

export default votingOptions;
