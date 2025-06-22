import {connect} from '@/dbConfig/dbConfig'
import {NextRequest,NextResponse} from 'next/server'

connect();

export async function GET(request: NextRequest) {
    try{

        const response = NextResponse.json({
            message:"Lgout successfully",
            success:true
        })

        response.cookies.set("token","" ,{
            httpOnly:true,
            expires: new Date(0)
        })

        return response;

    }catch(error){
        return NextResponse.json({error: 'An error occurred while processing your request.'}, {status: 500});
    }
}