import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { DetailedStandings } from './detailed-standings';
import { CompactStandings } from './compact-standings';

const TESTPLAYERS = {
  '10423': {
    id: '10423',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T08:52:00'
      },
      {
        round_number: 2,
        strokes: 76,
        tee_time: '2019-04-12T11:37:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Mike Weir',
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 72,
    roundTwoScore: 76,
    roundThreeScore: null,
    roundFourScore: null
  },
  '12716': {
    id: '12716',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T10:42:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T13:27:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Charley Hoffman',
    score: -4,
    teeTime: '12:25 pm',
    total: -4,
    isCut: false,
    isWD: false,
    position: 'T12',
    totalStrokes: 142,
    today: -2,
    toPar: -4,
    thru: 4,
    roundOneScore: 71,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '20229': {
    id: '20229',
    rounds: [
      {
        round_number: 1,
        strokes: 76,
        tee_time: '2019-04-11T11:48:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T08:52:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Stewart Cink',
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 76,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '20848': {
    id: '20848',
    rounds: [
      {
        round_number: 1,
        strokes: 82,
        tee_time: '2019-04-11T09:03:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T11:48:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Angel Cabrera',
    score: '+19',
    teeTime: '',
    total: 19,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 157,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 82,
    roundTwoScore: 75,
    roundThreeScore: null,
    roundFourScore: null
  },
  '21209': {
    id: '21209',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T09:58:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T12:54:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Sergio Garcia',
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 73,
    roundTwoScore: 75,
    roundThreeScore: null,
    roundFourScore: null
  },
  '21528': {
    id: '21528',
    rounds: [
      {
        round_number: 1,
        strokes: 74,
        tee_time: '2019-04-11T09:58:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T12:54:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T09:55:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Henrik Stenson',
    score: -1,
    teeTime: '9:55 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 146,
    today: -3,
    toPar: -1,
    thru: 15,
    roundOneScore: 74,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '21961': {
    id: '21961',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T09:47:00'
      },
      {
        round_number: 2,
        strokes: 67,
        tee_time: '2019-04-12T12:43:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Charles Howell III',
    score: -4,
    teeTime: '1:35 pm',
    total: -4,
    isCut: false,
    isWD: false,
    position: 'T12',
    totalStrokes: 140,
    today: null,
    toPar: -4,
    thru: '1:35 pm',
    roundOneScore: 73,
    roundTwoScore: 67,
    roundThreeScore: null,
    roundFourScore: null
  },
  '22378': {
    id: '22378',
    rounds: [
      {
        round_number: 1,
        strokes: 74,
        tee_time: '2019-04-11T11:37:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T08:41:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Trevor Immelman',
    score: '+3',
    teeTime: '10:25 am',
    total: 3,
    isCut: false,
    isWD: false,
    position: 'T57',
    totalStrokes: 146,
    today: '+1',
    toPar: '+3',
    thru: 12,
    roundOneScore: 74,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '22405': {
    id: '22405',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T13:49:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T10:53:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Justin Rose',
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 75,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '23108': {
    id: '23108',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T13:05:00'
      },
      {
        round_number: 2,
        strokes: 69,
        tee_time: '2019-04-12T09:58:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Matt Kuchar',
    score: -4,
    teeTime: '1:45 pm',
    total: -4,
    isCut: false,
    isWD: false,
    position: 'T12',
    totalStrokes: 140,
    today: null,
    toPar: -4,
    thru: '1:45 pm',
    roundOneScore: 71,
    roundTwoScore: 69,
    roundThreeScore: null,
    roundFourScore: null
  },
  '24024': {
    id: '24024',
    rounds: [
      {
        round_number: 1,
        strokes: 74,
        tee_time: '2019-04-11T13:05:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T09:58:00'
      },
      {
        round_number: 3,
        strokes: 73,
        tee_time: '2019-04-13T09:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Zach Johnson',
    score: '+4',
    teeTime: '9:25 am',
    total: 4,
    isCut: false,
    isWD: false,
    position: 'T62',
    totalStrokes: 220,
    today: '+1',
    toPar: '+4',
    thru: 'F',
    roundOneScore: 74,
    roundTwoScore: 73,
    roundThreeScore: 73,
    roundFourScore: null
  },
  '24138': {
    id: '24138',
    rounds: [
      {
        round_number: 1,
        strokes: 68,
        tee_time: '2019-04-11T13:05:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T09:58:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Ian Poulter',
    score: -5,
    teeTime: '2:05 pm',
    total: -5,
    isCut: false,
    isWD: false,
    position: 'T10',
    totalStrokes: 139,
    today: null,
    toPar: -5,
    thru: '2:05 pm',
    roundOneScore: 68,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '24502': {
    id: '24502',
    rounds: [
      {
        round_number: 1,
        strokes: 69,
        tee_time: '2019-04-11T10:09:00'
      },
      {
        round_number: 2,
        strokes: 68,
        tee_time: '2019-04-12T13:05:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Adam Scott',
    score: -7,
    teeTime: '2:35 pm',
    total: -7,
    isCut: false,
    isWD: false,
    position: 'T1',
    totalStrokes: 137,
    today: null,
    toPar: -7,
    thru: '2:35 pm',
    roundOneScore: 69,
    roundTwoScore: 68,
    roundThreeScore: null,
    roundFourScore: null
  },
  '25198': {
    id: '25198',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T13:16:00'
      },
      {
        round_number: 2,
        strokes: 67,
        tee_time: '2019-04-12T10:09:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Francesco Molinari',
    score: -7,
    teeTime: '2:45 pm',
    total: -7,
    isCut: false,
    isWD: false,
    position: 'T1',
    totalStrokes: 137,
    today: null,
    toPar: -7,
    thru: '2:45 pm',
    roundOneScore: 70,
    roundTwoScore: 67,
    roundThreeScore: null,
    roundFourScore: null
  },
  '25364': {
    id: '25364',
    rounds: [
      {
        round_number: 1,
        strokes: 81,
        tee_time: '2019-04-11T14:00:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T11:04:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Paul Casey',
    score: '+15',
    teeTime: '',
    total: 15,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 154,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 81,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '25396': {
    id: '25396',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T11:59:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T09:03:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Kevin Na',
    score: '+1',
    teeTime: '11:35 am',
    total: 1,
    isCut: false,
    isWD: false,
    position: 'T47',
    totalStrokes: 144,
    today: '+1',
    toPar: '+1',
    thru: 8,
    roundOneScore: 71,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '25632': {
    id: '25632',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T11:48:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T08:52:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Jimmy Walker',
    score: '+2',
    teeTime: '11:45 am',
    total: 2,
    isCut: false,
    isWD: false,
    position: 'T51',
    totalStrokes: 144,
    today: '+2',
    toPar: '+2',
    thru: 7,
    roundOneScore: 72,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '25804': {
    id: '25804',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T13:27:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T10:31:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Bubba Watson',
    score: -1,
    teeTime: '11:25 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 144,
    today: -1,
    toPar: -1,
    thru: 9,
    roundOneScore: 72,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '26329': {
    id: '26329',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T10:42:00'
      },
      {
        round_number: 2,
        strokes: 66,
        tee_time: '2019-04-12T13:27:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Louis Oosthuizen',
    score: -7,
    teeTime: '2:25 pm',
    total: -7,
    isCut: false,
    isWD: false,
    position: 'T1',
    totalStrokes: 137,
    today: null,
    toPar: -7,
    thru: '2:25 pm',
    roundOneScore: 71,
    roundTwoScore: 66,
    roundThreeScore: null,
    roundFourScore: null
  },
  '26331': {
    id: '26331',
    rounds: [
      {
        round_number: 1,
        strokes: 77,
        tee_time: '2019-04-11T09:47:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T12:43:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Charl Schwartzel',
    score: '+9',
    teeTime: '',
    total: 9,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 149,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 77,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '26499': {
    id: '26499',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T13:16:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T10:09:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Rafa Cabrera Bello',
    score: 'E',
    teeTime: '12:15 pm',
    total: 0,
    isCut: false,
    isWD: false,
    position: 'T43',
    totalStrokes: 143,
    today: '+1',
    toPar: 'E',
    thru: 4,
    roundOneScore: 73,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '26851': {
    id: '26851',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T10:42:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T13:27:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Marc Leishman',
    score: '+1',
    teeTime: '11:05 am',
    total: 1,
    isCut: false,
    isWD: false,
    position: 'T47',
    totalStrokes: 144,
    today: '+1',
    toPar: '+1',
    thru: 11,
    roundOneScore: 72,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '27141': {
    id: '27141',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T09:25:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T12:10:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'J.B. Holmes',
    score: -3,
    teeTime: '12:35 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 142,
    today: -1,
    toPar: -3,
    thru: 3,
    roundOneScore: 70,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '27349': {
    id: '27349',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T12:32:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T09:25:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T09:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Alex Noren',
    score: '+6',
    teeTime: '9:35 am',
    total: 6,
    isCut: false,
    isWD: false,
    position: '65',
    totalStrokes: 147,
    today: '+3',
    toPar: '+6',
    thru: 17,
    roundOneScore: 75,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '27408': {
    id: '27408',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T11:37:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T08:41:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T09:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Martin Kaymer',
    score: '+3',
    teeTime: '9:45 am',
    total: 3,
    isCut: false,
    isWD: false,
    position: 'T57',
    totalStrokes: 147,
    today: 'E',
    toPar: '+3',
    thru: 16,
    roundOneScore: 73,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '27649': {
    id: '27649',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T09:14:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T11:59:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Brandt Snedeker',
    score: '+9',
    teeTime: '',
    total: 9,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 149,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 75,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '28089': {
    id: '28089',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T13:38:00'
      },
      {
        round_number: 2,
        strokes: 67,
        tee_time: '2019-04-12T10:42:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Jason Day',
    score: -7,
    teeTime: '2:45 pm',
    total: -7,
    isCut: false,
    isWD: false,
    position: 'T1',
    totalStrokes: 137,
    today: null,
    toPar: -7,
    thru: '2:45 pm',
    roundOneScore: 70,
    roundTwoScore: 67,
    roundThreeScore: null,
    roundFourScore: null
  },
  '28237': {
    id: '28237',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T11:15:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T14:00:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Rory McIlroy',
    score: '+2',
    teeTime: '11:05 am',
    total: 2,
    isCut: false,
    isWD: false,
    position: 'T51',
    totalStrokes: 144,
    today: '+2',
    toPar: '+2',
    thru: 11,
    roundOneScore: 73,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '28938': {
    id: '28938',
    rounds: [
      {
        round_number: 1,
        strokes: 69,
        tee_time: '2019-04-11T09:03:00'
      },
      {
        round_number: 2,
        strokes: 69,
        tee_time: '2019-04-12T11:48:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Justin Harding',
    score: -6,
    teeTime: '2:15 pm',
    total: -6,
    isCut: false,
    isWD: false,
    position: 'T6',
    totalStrokes: 138,
    today: null,
    toPar: -6,
    thru: '2:15 pm',
    roundOneScore: 69,
    roundTwoScore: 69,
    roundThreeScore: null,
    roundFourScore: null
  },
  '29221': {
    id: '29221',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T10:31:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T13:16:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:55:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Webb Simpson',
    score: -2,
    teeTime: '11:55 am',
    total: -2,
    isCut: false,
    isWD: false,
    position: 'T27',
    totalStrokes: 143,
    today: -1,
    toPar: -2,
    thru: 7,
    roundOneScore: 72,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '29420': {
    id: '29420',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T12:43:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T09:36:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T09:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Billy Horschel',
    score: '+5',
    teeTime: '9:35 am',
    total: 5,
    isCut: false,
    isWD: false,
    position: '64',
    totalStrokes: 147,
    today: '+2',
    toPar: '+5',
    thru: 17,
    roundOneScore: 72,
    roundTwoScore: 75,
    roundThreeScore: null,
    roundFourScore: null
  },
  '29478': {
    id: '29478',
    rounds: [
      {
        round_number: 1,
        strokes: 69,
        tee_time: '2019-04-11T12:54:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T09:47:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Kevin Kisner',
    score: -2,
    teeTime: '12:45 pm',
    total: -2,
    isCut: false,
    isWD: false,
    position: 'T27',
    totalStrokes: 142,
    today: 'E',
    toPar: -2,
    thru: 2,
    roundOneScore: 69,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '29725': {
    id: '29725',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T09:58:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T12:54:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Tony Finau',
    score: -3,
    teeTime: '1:15 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 141,
    today: null,
    toPar: -3,
    thru: '1:15 pm',
    roundOneScore: 71,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '29974': {
    id: '29974',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T09:36:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T12:32:00'
      },
      {
        round_number: 3,
        strokes: 72,
        tee_time: '2019-04-13T09:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Branden Grace',
    score: '+3',
    teeTime: '9:15 am',
    total: 3,
    isCut: false,
    isWD: false,
    position: 'T57',
    totalStrokes: 219,
    today: 'E',
    toPar: '+3',
    thru: 'F',
    roundOneScore: 72,
    roundTwoScore: 75,
    roundThreeScore: 72,
    roundFourScore: null
  },
  '30063': {
    id: '30063',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T12:10:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T09:14:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Alvaro Ortiz',
    score: '+2',
    teeTime: '11:35 am',
    total: 2,
    isCut: false,
    isWD: false,
    position: 'T51',
    totalStrokes: 144,
    today: '+2',
    toPar: '+2',
    thru: 8,
    roundOneScore: 73,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '30110': {
    id: '30110',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T10:09:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T13:05:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Kyle Stanley',
    score: -1,
    teeTime: '11:15 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 144,
    today: -1,
    toPar: -1,
    thru: 9,
    roundOneScore: 72,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '30911': {
    id: '30911',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T10:53:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T13:38:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Tommy Fleetwood',
    score: -3,
    teeTime: '12:25 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 142,
    today: -1,
    toPar: -3,
    thru: 4,
    roundOneScore: 71,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '30925': {
    id: '30925',
    rounds: [
      {
        round_number: 1,
        strokes: 68,
        tee_time: '2019-04-11T13:38:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T10:42:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Dustin Johnson',
    score: -6,
    teeTime: '2:25 pm',
    total: -6,
    isCut: false,
    isWD: false,
    position: 'T6',
    totalStrokes: 138,
    today: null,
    toPar: -6,
    thru: '2:25 pm',
    roundOneScore: 68,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '30978': {
    id: '30978',
    rounds: [
      {
        round_number: 1,
        strokes: 69,
        tee_time: '2019-04-11T12:54:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T09:47:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Kiradech Aphibarnrat',
    score: -3,
    teeTime: '1:35 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 141,
    today: null,
    toPar: -3,
    thru: '1:35 pm',
    roundOneScore: 69,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '31323': {
    id: '31323',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T10:53:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T13:38:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Gary Woodland',
    score: -2,
    teeTime: '1:05 pm',
    total: -2,
    isCut: false,
    isWD: false,
    position: 'T27',
    totalStrokes: 141,
    today: '+1',
    toPar: -2,
    thru: 1,
    roundOneScore: 70,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '31646': {
    id: '31646',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T09:36:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T12:32:00'
      },
      {
        round_number: 3,
        strokes: 73,
        tee_time: '2019-04-13T09:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Emiliano Grillo',
    score: '+4',
    teeTime: '9:15 am',
    total: 4,
    isCut: false,
    isWD: false,
    position: 'T62',
    totalStrokes: 220,
    today: '+1',
    toPar: '+4',
    thru: 'F',
    roundOneScore: 72,
    roundTwoScore: 75,
    roundThreeScore: 73,
    roundFourScore: null
  },
  '32102': {
    id: '32102',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T11:15:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T14:00:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Rickie Fowler',
    score: -2,
    teeTime: '1:05 pm',
    total: -2,
    isCut: false,
    isWD: false,
    position: 'T27',
    totalStrokes: 141,
    today: '+1',
    toPar: -2,
    thru: 1,
    roundOneScore: 70,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '32139': {
    id: '32139',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T09:14:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T11:59:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Danny Willett',
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 75,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '32333': {
    id: '32333',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T08:41:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T11:26:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Kevin Tway',
    score: -1,
    teeTime: '12:05 pm',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 143,
    today: 'E',
    toPar: -1,
    thru: 6,
    roundOneScore: 72,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '32757': {
    id: '32757',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T11:26:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T08:30:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:55:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Patton Kizzire',
    score: -4,
    teeTime: '1:55 pm',
    total: -4,
    isCut: false,
    isWD: false,
    position: 'T12',
    totalStrokes: 140,
    today: null,
    toPar: -4,
    thru: '1:55 pm',
    roundOneScore: 70,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '32775': {
    id: '32775',
    rounds: [
      {
        round_number: 1,
        strokes: 76,
        tee_time: '2019-04-11T12:54:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T09:47:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Shugo Imahira',
    score: '+10',
    teeTime: '',
    total: 10,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 150,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 76,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '32816': {
    id: '32816',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T13:27:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T10:31:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Satoshi Kodaira',
    score: '+3',
    teeTime: '10:35 am',
    total: 3,
    isCut: false,
    isWD: false,
    position: 'T57',
    totalStrokes: 145,
    today: '+2',
    toPar: '+3',
    thru: 12,
    roundOneScore: 75,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '32839': {
    id: '32839',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T10:09:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T13:05:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Hideki Matsuyama',
    score: -2,
    teeTime: '10:25 am',
    total: -2,
    isCut: false,
    isWD: false,
    position: 'T27',
    totalStrokes: 145,
    today: -3,
    toPar: -2,
    thru: 12,
    roundOneScore: 75,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '33141': {
    id: '33141',
    rounds: [
      {
        round_number: 1,
        strokes: 76,
        tee_time: '2019-04-11T12:32:00'
      },
      {
        round_number: 2,
        strokes: 68,
        tee_time: '2019-04-12T09:25:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Keegan Bradley',
    score: 'E',
    teeTime: '11:25 am',
    total: 0,
    isCut: false,
    isWD: false,
    position: 'T43',
    totalStrokes: 144,
    today: 'E',
    toPar: 'E',
    thru: 8,
    roundOneScore: 76,
    roundTwoScore: 68,
    roundThreeScore: null,
    roundFourScore: null
  },
  '33204': {
    id: '33204',
    rounds: [
      {
        round_number: 1,
        strokes: 78,
        tee_time: '2019-04-11T08:52:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T11:37:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Shane Lowry',
    score: '+11',
    teeTime: '',
    total: 11,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 151,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 78,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '33410': {
    id: '33410',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T08:30:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T11:15:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Andrew Landry',
    score: '+1',
    teeTime: '10:35 am',
    total: 1,
    isCut: false,
    isWD: false,
    position: 'T47',
    totalStrokes: 145,
    today: 'E',
    toPar: '+1',
    thru: 12,
    roundOneScore: 72,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '33448': {
    id: '33448',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T13:49:00'
      },
      {
        round_number: 2,
        strokes: 68,
        tee_time: '2019-04-12T10:53:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Justin Thomas',
    score: -3,
    teeTime: '1:25 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 141,
    today: null,
    toPar: -3,
    thru: '1:25 pm',
    roundOneScore: 73,
    roundTwoScore: 68,
    roundThreeScore: null,
    roundFourScore: null
  },
  '33803': {
    id: '33803',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T09:36:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T12:32:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Lucas Bjerregaard',
    score: -3,
    teeTime: '12:35 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 142,
    today: -1,
    toPar: -3,
    thru: 3,
    roundOneScore: 70,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '33968': {
    id: '33968',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T11:59:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T09:03:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Thorbjorn Olesen',
    score: -3,
    teeTime: '12:45 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 142,
    today: -1,
    toPar: -3,
    thru: 3,
    roundOneScore: 71,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '34046': {
    id: '34046',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T14:00:00'
      },
      {
        round_number: 2,
        strokes: 68,
        tee_time: '2019-04-12T11:04:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Jordan Spieth',
    score: 'E',
    teeTime: '12:05 pm',
    total: 0,
    isCut: false,
    isWD: false,
    position: 'T43',
    totalStrokes: 143,
    today: '+1',
    toPar: 'E',
    thru: 6,
    roundOneScore: 75,
    roundTwoScore: 68,
    roundThreeScore: null,
    roundFourScore: null
  },
  '34360': {
    id: '34360',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T10:31:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T13:16:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:55:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Patrick Reed',
    score: -1,
    teeTime: '11:55 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 143,
    today: 'E',
    toPar: -1,
    thru: 7,
    roundOneScore: 73,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '34363': {
    id: '34363',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T13:16:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T10:09:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Tyrrell Hatton',
    score: -1,
    teeTime: '10:15 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 146,
    today: -3,
    toPar: -1,
    thru: 13,
    roundOneScore: 73,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '34449': {
    id: '34449',
    rounds: [
      {
        round_number: 1,
        strokes: 77,
        tee_time: '2019-04-11T08:52:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T11:37:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: "Kevin O'Connell",
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 77,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '34709': {
    id: '34709',
    rounds: [
      {
        round_number: 1,
        strokes: 74,
        tee_time: '2019-04-11T09:47:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T12:43:00'
      },
      {
        round_number: 3,
        strokes: 72,
        tee_time: '2019-04-13T09:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Eddie Pepperell',
    score: '+3',
    teeTime: '9:05 am',
    total: 3,
    isCut: false,
    isWD: false,
    position: 'T57',
    totalStrokes: 219,
    today: 'E',
    toPar: '+3',
    thru: 'F',
    roundOneScore: 74,
    roundTwoScore: 73,
    roundThreeScore: 72,
    roundFourScore: null
  },
  '35296': {
    id: '35296',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T11:04:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T13:49:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T09:55:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Haotong Li',
    score: '+2',
    teeTime: '9:55 am',
    total: 2,
    isCut: false,
    isWD: false,
    position: 'T51',
    totalStrokes: 146,
    today: 'E',
    toPar: '+2',
    thru: 15,
    roundOneScore: 72,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '35449': {
    id: '35449',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T08:30:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T11:15:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Adam Long',
    score: '+9',
    teeTime: '',
    total: 9,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 149,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 75,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '35450': {
    id: '35450',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T13:27:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T10:31:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Patrick Cantlay',
    score: -3,
    teeTime: '10:15 am',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 146,
    today: -5,
    toPar: -3,
    thru: 13,
    roundOneScore: 73,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '35891': {
    id: '35891',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T11:15:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T14:00:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Cameron Smith',
    score: -1,
    teeTime: '10:45 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 144,
    today: -1,
    toPar: -1,
    thru: 12,
    roundOneScore: 70,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '36689': {
    id: '36689',
    rounds: [
      {
        round_number: 1,
        strokes: 66,
        tee_time: '2019-04-11T14:00:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T11:04:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:35:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Brooks Koepka',
    score: -7,
    teeTime: '2:35 pm',
    total: -7,
    isCut: false,
    isWD: false,
    position: 'T1',
    totalStrokes: 137,
    today: null,
    toPar: -7,
    thru: '2:35 pm',
    roundOneScore: 66,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '37455': {
    id: '37455',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T09:25:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T12:10:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Si Woo Kim',
    score: 'E',
    teeTime: '11:15 am',
    total: 0,
    isCut: false,
    isWD: false,
    position: 'T43',
    totalStrokes: 144,
    today: 'E',
    toPar: 'E',
    thru: 9,
    roundOneScore: 72,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '39546': {
    id: '39546',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T08:41:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T11:26:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Keith Mitchell',
    score: '+2',
    teeTime: '10:05 am',
    total: 2,
    isCut: false,
    isWD: false,
    position: 'T51',
    totalStrokes: 146,
    today: 'E',
    toPar: '+2',
    thru: 14,
    roundOneScore: 72,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '39975': {
    id: '39975',
    rounds: [
      {
        round_number: 1,
        strokes: 76,
        tee_time: '2019-04-11T11:26:00'
      },
      {
        round_number: 2,
        strokes: 78,
        tee_time: '2019-04-12T08:30:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Michael Kim',
    score: '+15',
    teeTime: '',
    total: 15,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 154,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 76,
    roundTwoScore: 78,
    roundThreeScore: null,
    roundFourScore: null
  },
  '39997': {
    id: '39997',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T08:30:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T11:15:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Corey Conners',
    score: -3,
    teeTime: '1:15 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 141,
    today: null,
    toPar: -3,
    thru: '1:15 pm',
    roundOneScore: 70,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '40098': {
    id: '40098',
    rounds: [
      {
        round_number: 1,
        strokes: 78,
        tee_time: '2019-04-11T12:32:00'
      },
      {
        round_number: 2,
        strokes: 67,
        tee_time: '2019-04-12T09:25:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Matthew Fitzpatrick',
    score: -1,
    teeTime: '10:45 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 145,
    today: -2,
    toPar: -1,
    thru: 11,
    roundOneScore: 78,
    roundTwoScore: 67,
    roundThreeScore: null,
    roundFourScore: null
  },
  '46717': {
    id: '46717',
    rounds: [
      {
        round_number: 1,
        strokes: 72,
        tee_time: '2019-04-11T10:31:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T13:16:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T11:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Viktor Hovland',
    score: '+1',
    teeTime: '11:45 am',
    total: 1,
    isCut: false,
    isWD: false,
    position: 'T47',
    totalStrokes: 143,
    today: '+2',
    toPar: '+1',
    thru: 7,
    roundOneScore: 72,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '46970': {
    id: '46970',
    rounds: [
      {
        round_number: 1,
        strokes: 69,
        tee_time: '2019-04-11T11:04:00'
      },
      {
        round_number: 2,
        strokes: 70,
        tee_time: '2019-04-12T13:49:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:55:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Jon Rahm',
    score: -5,
    teeTime: '1:55 pm',
    total: -5,
    isCut: false,
    isWD: false,
    position: 'T10',
    totalStrokes: 139,
    today: null,
    toPar: -5,
    thru: '1:55 pm',
    roundOneScore: 69,
    roundTwoScore: 70,
    roundThreeScore: null,
    roundFourScore: null
  },
  '47917': {
    id: '47917',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T09:14:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T11:59:00'
      },
      {
        round_number: 3,
        strokes: 68,
        tee_time: '2019-04-13T09:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Takumi Kanaya',
    score: -1,
    teeTime: '9:25 am',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 215,
    today: -4,
    toPar: -1,
    thru: 'F',
    roundOneScore: 73,
    roundTwoScore: 74,
    roundThreeScore: 68,
    roundFourScore: null
  },
  '47959': {
    id: '47959',
    rounds: [
      {
        round_number: 1,
        strokes: 66,
        tee_time: '2019-04-11T13:38:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T10:42:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:25:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Bryson DeChambeau',
    score: -3,
    teeTime: '1:25 pm',
    total: -3,
    isCut: false,
    isWD: false,
    position: 'T17',
    totalStrokes: 141,
    today: null,
    toPar: -3,
    thru: '1:25 pm',
    roundOneScore: 66,
    roundTwoScore: 75,
    roundThreeScore: null,
    roundFourScore: null
  },
  '48081': {
    id: '48081',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T10:53:00'
      },
      {
        round_number: 2,
        strokes: 65,
        tee_time: '2019-04-12T13:38:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Xander Schauffele',
    score: -6,
    teeTime: '2:15 pm',
    total: -6,
    isCut: false,
    isWD: false,
    position: 'T6',
    totalStrokes: 138,
    today: null,
    toPar: -6,
    thru: '2:15 pm',
    roundOneScore: 73,
    roundTwoScore: 65,
    roundThreeScore: null,
    roundFourScore: null
  },
  '48887': {
    id: '48887',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T12:10:00'
      },
      {
        round_number: 2,
        strokes: 77,
        tee_time: '2019-04-12T09:14:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Matt Wallace',
    score: '+13',
    teeTime: '',
    total: 13,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 152,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 75,
    roundTwoScore: 77,
    roundThreeScore: null,
    roundFourScore: null
  },
  '49964': {
    id: '49964',
    rounds: [
      {
        round_number: 1,
        strokes: 75,
        tee_time: '2019-04-11T09:03:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T11:48:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T10:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Aaron Wise',
    score: -2,
    teeTime: '10:05 am',
    total: -2,
    isCut: false,
    isWD: false,
    position: 'T27',
    totalStrokes: 146,
    today: -4,
    toPar: -2,
    thru: 14,
    roundOneScore: 75,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '51563': {
    id: '51563',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T12:43:00'
      },
      {
        round_number: 2,
        strokes: 79,
        tee_time: '2019-04-12T09:36:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Jovan Rebula',
    score: '+13',
    teeTime: '',
    total: 13,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 152,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 73,
    roundTwoScore: 79,
    roundThreeScore: null,
    roundFourScore: null
  },
  '55888': {
    id: '55888',
    rounds: [
      {
        round_number: 1,
        strokes: 74,
        tee_time: '2019-04-11T11:37:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T08:41:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T09:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Devon Bling',
    score: '+2',
    teeTime: '9:45 am',
    total: 2,
    isCut: false,
    isWD: false,
    position: 'T51',
    totalStrokes: 147,
    today: -1,
    toPar: '+2',
    thru: 15,
    roundOneScore: 74,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '08793': {
    id: '08793',
    rounds: [
      {
        round_number: 1,
        strokes: 70,
        tee_time: '2019-04-11T11:04:00'
      },
      {
        round_number: 2,
        strokes: 68,
        tee_time: '2019-04-12T13:49:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T14:05:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Tiger Woods',
    score: -6,
    teeTime: '2:05 pm',
    total: -6,
    isCut: false,
    isWD: false,
    position: 'T6',
    totalStrokes: 138,
    today: null,
    toPar: -6,
    thru: '2:05 pm',
    roundOneScore: 70,
    roundTwoScore: 68,
    roundThreeScore: null,
    roundFourScore: null
  },
  '01810': {
    id: '01810',
    rounds: [
      {
        round_number: 1,
        strokes: 67,
        tee_time: '2019-04-11T13:49:00'
      },
      {
        round_number: 2,
        strokes: 73,
        tee_time: '2019-04-12T10:53:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T13:45:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Phil Mickelson',
    score: -4,
    teeTime: '1:45 pm',
    total: -4,
    isCut: false,
    isWD: false,
    position: 'T12',
    totalStrokes: 140,
    today: null,
    toPar: -4,
    thru: '1:45 pm',
    roundOneScore: 67,
    roundTwoScore: 73,
    roundThreeScore: null,
    roundFourScore: null
  },
  '01666': {
    id: '01666',
    rounds: [
      {
        round_number: 1,
        strokes: 71,
        tee_time: '2019-04-11T12:10:00'
      },
      {
        round_number: 2,
        strokes: 72,
        tee_time: '2019-04-12T09:14:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: '2019-04-13T12:15:00'
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: 3,
    fullName: 'Bernhard Langer',
    score: -1,
    teeTime: '12:15 pm',
    total: -1,
    isCut: false,
    isWD: false,
    position: 'T33',
    totalStrokes: 143,
    today: 'E',
    toPar: -1,
    thru: 5,
    roundOneScore: 71,
    roundTwoScore: 72,
    roundThreeScore: null,
    roundFourScore: null
  },
  '01717': {
    id: '01717',
    rounds: [
      {
        round_number: 1,
        strokes: 73,
        tee_time: '2019-04-11T11:26:00'
      },
      {
        round_number: 2,
        strokes: 75,
        tee_time: '2019-04-12T08:30:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Sandy Lyle',
    score: '+7',
    teeTime: '',
    total: 7,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 148,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 73,
    roundTwoScore: 75,
    roundThreeScore: null,
    roundFourScore: null
  },
  '01226': {
    id: '01226',
    rounds: [
      {
        round_number: 1,
        strokes: 78,
        tee_time: '2019-04-11T09:25:00'
      },
      {
        round_number: 2,
        strokes: 71,
        tee_time: '2019-04-12T12:10:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Fred Couples',
    score: '+9',
    teeTime: '',
    total: 9,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 149,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 78,
    roundTwoScore: 71,
    roundThreeScore: null,
    roundFourScore: null
  },
  '01823': {
    id: '01823',
    rounds: [
      {
        round_number: 1,
        strokes: 77,
        tee_time: '2019-04-11T11:48:00'
      },
      {
        round_number: 2,
        strokes: 74,
        tee_time: '2019-04-12T08:52:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Larry Mize',
    score: '+11',
    teeTime: '',
    total: 11,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 151,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 77,
    roundTwoScore: 74,
    roundThreeScore: null,
    roundFourScore: null
  },
  '06567': {
    id: '06567',
    rounds: [
      {
        round_number: 1,
        strokes: 80,
        tee_time: '2019-04-11T12:43:00'
      },
      {
        round_number: 2,
        strokes: 76,
        tee_time: '2019-04-12T09:36:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Vijay Singh',
    score: '+18',
    teeTime: '',
    total: 18,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 156,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 80,
    roundTwoScore: 76,
    roundThreeScore: null,
    roundFourScore: null
  },
  '02300': {
    id: '02300',
    rounds: [
      {
        round_number: 1,
        strokes: 80,
        tee_time: '2019-04-11T08:41:00'
      },
      {
        round_number: 2,
        strokes: 76,
        tee_time: '2019-04-12T11:26:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Ian Woosnam',
    score: '+18',
    teeTime: '',
    total: 18,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 156,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 80,
    roundTwoScore: 76,
    roundThreeScore: null,
    roundFourScore: null
  },
  '06373': {
    id: '06373',
    rounds: [
      {
        round_number: 1,
        strokes: 78,
        tee_time: '2019-04-11T11:59:00'
      },
      {
        round_number: 2,
        strokes: 79,
        tee_time: '2019-04-12T09:03:00'
      },
      {
        round_number: 3,
        strokes: null,
        tee_time: null
      },
      {
        round_number: 4,
        strokes: null,
        tee_time: null
      }
    ],
    currentRound: null,
    fullName: 'Jose Maria Olazabal',
    score: '+19',
    teeTime: '',
    total: 19,
    isCut: true,
    isWD: false,
    position: '',
    totalStrokes: 157,
    today: null,
    toPar: 'CUT',
    thru: 'CUT',
    roundOneScore: 78,
    roundTwoScore: 79,
    roundThreeScore: null,
    roundFourScore: null
  }
};

const TESTTEAMS = [
  {
    id: 63,
    name: 'Luke',
    players: ['32102', '34046', '29725', '24024', '21528', '32839']
  },
  {
    id: 64,
    name: 'Kevin Johnstone 2',
    players: ['33448', '25364', '31323', '35450', '23108', '21209']
  },
  {
    id: 34,
    name: 'Cail Sitzman',
    players: ['30925', '20848', '33968', '36689', '27649', '34046']
  },
  {
    id: 65,
    name: 'Carlos Guzman ',
    players: ['46970', '27649', '21209', '40098', '32102', '26329']
  },
  {
    id: 66,
    name: 'Will Dobson ',
    players: ['36689', '25804', '24502', '24024', '28089', '26331']
  },
  {
    id: 67,
    name: 'Chris Presto 1 ',
    players: ['12716', '08793', '33968', '39546', '23108', '22405']
  },
  {
    id: 69,
    name: 'Chris Presto 2',
    players: ['30925', '25198', '29725', '32775', '24138', '23108']
  },
  {
    id: 70,
    name: 'Rich Manuli',
    players: ['36689', '22405', '30911', '29725', '01226', '20848']
  },
  {
    id: 71,
    name: 'Kevin Tancredi',
    players: ['23108', '08793', '29221', '01226', '48081', '36689']
  },
  {
    id: 73,
    name: 'Wings Country',
    players: ['30925', '01226', '34709', '21961', '48081', '32102']
  },
  {
    id: 74,
    name: 'Justin Rose',
    players: ['22405', '21528', '27649', '28089', '12716', '26329']
  },
  {
    id: 75,
    name: 'Dan Gray',
    players: ['30925', '29725', '21528', '01226', '25804', '23108']
  },
  {
    id: 77,
    name: 'Chris Higgins ',
    players: ['28237', '34046', '32102', '25396', '27649', '20848']
  },
  {
    id: 78,
    name: "Holt Hole'n Ya Hoe",
    players: ['46970', '30911', '29725', '26851', '27141', '23108']
  },
  {
    id: 79,
    name: 'Brian B',
    players: ['25198', '34360', '33448', '34046', '33141', '27649']
  },
  {
    id: 80,
    name: "Holt Hole'n 2 times",
    players: ['08793', '30911', '24502', '23108', '01226', '26851']
  },
  {
    id: 81,
    name: 'Matthew Shannon',
    players: ['46970', '32102', '34046', '23108', '12716', '39997']
  },
  {
    id: 84,
    name: 'John E',
    players: ['29478', '29725', '22405', '34046', '01666', '26329']
  },
  {
    id: 87,
    name: 'Joe Terpstra',
    players: ['23108', '08793', '29478', '12716', '32102', '24502']
  },
  {
    id: 86,
    name: 'Grandpa Shannon',
    players: ['30925', '30911', '32839', '34360', '06373', '01666']
  },
  {
    id: 88,
    name: 'Mike Reilly',
    players: ['29725', '25804', '24138', '32839', '32102', '33968']
  },
  {
    id: 92,
    name: 'Brandon Horton',
    players: ['46970', '36689', '26851', '08793', '20848', '10423']
  },
  {
    id: 33,
    name: 'Eric McLaud',
    players: ['32102', '30911', '24138', '21528', '23108', '34360']
  },
  {
    id: 91,
    name: 'Kyle Higgins',
    players: ['34046', '23108', '33141', '39546', '30925', '34360']
  },
  {
    id: 37,
    name: "Dusty's Coastal Bender (Holt) ",
    players: ['30925', '34046', '32102', '34360', '51563', '20848']
  },
  {
    id: 38,
    name: "DustGod's Healthy Back ",
    players: ['30925', '08793', '24502', '30063', '10423', '31323']
  },
  {
    id: 41,
    name: 'John Higgins',
    players: ['28237', '01810', '32102', '01226', '33141', '27649']
  },
  {
    id: 42,
    name: 'John Martino',
    players: ['24502', '30925', '37455', '28089', '24138', '24024']
  },
  {
    id: 54,
    name: 'Andrew Trifari',
    players: ['23108', '25632', '40098', '32102', '28089', '34046']
  },
  {
    id: 95,
    name: 'Brendan Higgins',
    players: ['36689', '34360', '29725', '25198', '48081', '27649']
  },
  {
    id: 45,
    name: 'John Martino 2',
    players: ['28237', '46970', '01810', '24024', '37455', '25396']
  },
  {
    id: 46,
    name: 'John Veirun ',
    players: ['34046', '30925', '24502', '21961', '29478', '21528']
  },
  {
    id: 52,
    name: 'Aidan Veirun ',
    players: ['30911', '32102', '34046', '25364', '27649', '10423']
  },
  {
    id: 53,
    name: 'Linda Higgins',
    players: ['30925', '36689', '37455', '33141', '12716', '25198']
  },
  {
    id: 59,
    name: 'Kevin Stillerman',
    players: ['08793', '34046', '01810', '23108', '27649', '32139']
  },
  {
    id: 60,
    name: 'Kevin Johnstone',
    players: ['46970', '29725', '35450', '23108', '40098', '34046']
  }
];

export class NewStandings extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      isDetailed: true,
      searchText: '',
      dropdown: 'Filter by team'
    };
  }

  async componentDidMount() {
    const teamsResp = await fetch(
      'https://fantasy-golf-server.herokuapp.com/teams'
    );
    const teams = await teamsResp.json();
    this.setState({ teams });
  }

  render() {
    const { isDetailed, teams, dropdown, searchText } = this.state;
    return (
      <div className='d-flex flex-column justify-content-start align-items-center'>
        <ButtonGroup className='my-3'>
          <Button
            onClick={this.setIsDetailed(true)}
            variant={isDetailed ? 'primary' : 'secondary'}
          >
            Detailed
          </Button>
          <Button
            onClick={this.setIsDetailed(false)}
            variant={isDetailed ? 'secondary' : 'primary'}
          >
            Compact
          </Button>
        </ButtonGroup>

        {isDetailed ? (
          <>
            <InputGroup className='mb-3'>
              <DropdownButton
                as={InputGroup.Prepend}
                variant='outline-secondary'
                title={dropdown}
                id='input-group-dropdown-1'
              >
                <Dropdown.Item onClick={this.handleDropdown(true)}>
                  Filter by team
                </Dropdown.Item>
                <Dropdown.Item onClick={this.handleDropdown(false)}>
                  Filter by player
                </Dropdown.Item>
              </DropdownButton>
              <FormControl
                value={searchText}
                onChange={this.handlePlayerSearch}
                placeholder={`Ex. ${
                  dropdown === 'Filter by team' ? 'Brendan' : 'Tiger'
                }`}
              />
              <InputGroup.Append>
                <Button
                  onClick={this.clearPlayerSearch}
                  variant='outline-secondary'
                >
                  Clear
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <DetailedStandings
              players={TESTPLAYERS}
              teams={TESTTEAMS}
              teamsMap={this.getTeamsMap(TESTTEAMS)}
            />
          </>
        ) : (
          <CompactStandings players={TESTPLAYERS} teams={TESTTEAMS} />
        )}
      </div>
    );
  }

  getTeamsMap = teams => {
    const { searchText, dropdown } = this.state;
    const regex = new RegExp(searchText.toLowerCase());
    const teamsMap = {};

    if (dropdown === 'Filter by team') {
      teams.forEach(t => {
        if (regex.test(t.name.toLowerCase())) {
          teamsMap[t.name] = t.name;
        }
      });
    } else {
      teams.forEach(t => {
        if (
          t.players
            .map(id => TESTPLAYERS[id].fullName)
            .some(name => regex.test(name.toLowerCase()))
        ) {
          teamsMap[t.name] = t.name;
        }
      });
    }

    return teamsMap;
  };

  setIsDetailed = isDetailed => {
    return () => {
      this.setState({ isDetailed });
    };
  };

  clearPlayerSearch = () => {
    this.setState({ searchText: '' });
  };

  handlePlayerSearch = e => {
    this.setState({ searchText: e.target.value });
  };

  handleDropdown = isTeam => {
    return () => {
      this.setState({ dropdown: `Filter by ${isTeam ? 'team' : 'player'}` });
    };
  };
}
