import track1 from '../musics/bad-boy.mp3';
import track2 from '../musics/behula.mp3';
import track3 from '../musics/bondhurey.mp3';
import track4 from '../musics/chogada-tara.mp3';
import track5 from '../musics/moonlight.mp3';
import track6 from '../musics/garmi.mp3';

const playlist = [
     {
          "_id": 100,
          "name": "Romantic Fusion",         
          "createdBy": "Iftakher Hossen",
          "cover": "https://im.vsco.co/aws-us-west-2/27b380/48469013/5d50d610cfc20666231ea9db/vsco5d50d61190259.jpg?w=800",
          "type": "Playlist",
          "musics": [
               {
                    "_id": 1001,
                    "name": "Garmi",
                    "cover": "https://a10.gaanacdn.com/gn_img/song/jBr3gybR1m/r3gNMnyQKR/size_m_1577334328.webp",
                    "singer": "Neha K., Badshah",
                    "audio": track6,
                    "lyrics": "",
                    "duration": "4:37",
                    "language": "Hindi"
               },
               {
                    "_id": 1002,
                    "name": "Chogada Tara",
                    "cover": "https://i0.wp.com/bangla-lyrics.club/wp-content/uploads/2019/01/CHOGADA-LYRICS-Loveratri-Darshan-Raval.jpg?fit=600%2C450&ssl=1",
                    "singer": "Darshan R., Asees K.",
                    "singerFullName": "Darshan Raval, Asees Kaur",
                    "audio": track4,
                    "lyrics": "",
                    "duration": "4:34",
                    "language": "Hindi"
               },
               {
                    "_id": 1003,
                    "name": "Bondhurey",
                    "cover": "https://i1.sndcdn.com/artworks-000334564641-7744kx-t500x500.jpg",
                    "singer": "Muza",
                    "audio": track3,
                    "lyrics": "",
                    "duration": "4:35",
                    "language": "Bangla"
               }
          ]
     },
     {
          "_id": 200,
          "name": "Party Remix",         
          "createdBy": "Iftakher Hossen",
          "cover": "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "type": "Playlist",
          "musics": [
               {
                    "_id": 2001,
                    "name": "Bad Boy",
                    "cover": "https://linkstorage.linkfire.com/medialinks/images/b0372a7f-5a2c-41f0-9748-3f10d923cc61/artwork-440x440.jpg",
                    "singer": "Tungevaag, Raaban",
                    "audio": track1,
                    "lyrics": "",
                    "duration": "3:17",
                    "language": "English"
               },
               {
                    "_id": 2002,
                    "name": "Garmi",
                    "cover": "https://a10.gaanacdn.com/gn_img/song/jBr3gybR1m/r3gNMnyQKR/size_m_1577334328.webp",
                    "singer": "Neha K., Badshah",
                    "singerFullName": "Neha Kakkar, Badshah",
                    "audio": track6,
                    "lyrics": "",
                    "duration": "4:37",
                    "language": "Hindi"
               },
               {
                    "_id": 2003,
                    "name": "Moonlight",
                    "cover": "https://i1.sndcdn.com/artworks-rSEEltQjAGDF9HwW-VQ83Lw-t500x500.jpg",
                    "singer": "XXXTENTACION",
                    "audio": track5,
                    "lyrics": "",
                    "duration": "2:17",
                    "language": "English"
               }
          ]
     },
     {
          "_id": 300,
          "name": "Sadness Beauty",         
          "createdBy": "Iftakher Hossen",
          "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq7JtSV2xEL0lOHi59tGmks1Hr4_U3JCVDA&usqp=CAU",
          "type": "Playlist",
          "musics": [
               {
                    "_id": 3001,
                    "name": "Behula",
                    "cover": "https://i.scdn.co/image/ab67616d0000b273284f9737acd1edcffbdcb826",
                    "singer": "Shunno",
                    "audio": track2,
                    "lyrics": "",
                    "duration": "4:26",
                    "language": "Bangla"
               }
          ]
     }
]

export default playlist;