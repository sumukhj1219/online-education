// pages/api/fetchcourses/[[...q]].ts
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const API_KEY = process.env.YOUTUBE_API_KEY as string;
  const q = req.nextUrl;
  console.log(q);

  if (!q) {
    return NextResponse.json({ message: 'Query parameter "q" is required' }, { status: 400 });
  }

//   try {
//     const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
//       params: {
//         part: 'snippet',
//         type: 'video',
//         maxResults: 10,
//         q,
//         key: API_KEY,
//       },
//     });

//     return NextResponse.json({ response: response }, { status: 200 });

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
//   }
}
