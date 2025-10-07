# Backend in Next.js

Next.js is a full stack framework

### Data fetching in Next

You should fetch the user details on the server side and pre-render the page before returning it to the user.



 >  npx create-next-app@latest 
 > npm i axios


*nextjs now supports async components*

`
import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("")
	return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      {userData.email}
      {userData.name}
    </div>
  );
}

`

app/api/user/roue.ts:

`
export function GET() {
    return Response.json({
        "name":"biswajit",
        "email":"biswa@gmail.com",
        "state":"westbengal",
        "houseNumber":"411"      
    })
}

`




### Introduction api routes in Next.js

NextJS lets you write backend routes, just like express does.
This is why Next is considered to be a *full stack framework*.

The benefits of using NextJS for backend includes - 
1.Code in a single repo
2.All standard things you get in a backend framework like express
3.Server components can directly talk to the backend
 


### Database

all steps are same for prisma in React 



####   define schema

`

model User {
  id        Int     @id  @default(autoincrement())
  username  String  @unique
  password  String
}

`

[] finishing tht signup endpoint rote for POST reques



`

export async function POST(req: NextRequest) {
    const body = await req.json();
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    console.log(user.id);
    return NextResponse.json({ message: "Signed up" });
}

`
