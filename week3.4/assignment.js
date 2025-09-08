const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

const z = require("zod");

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJwt(username, password) {
  const usrnameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usrnameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    ans = false;
  }
  return ans;
}

function decodeJwt(token) {
  // true, fale
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
}

const ans = signJwt("biswa@gmail.com", "123232342");
// console.log(ans);

const ans1 = verifyJwt("dfsfsdfsdf");
console.log(ans1);

const ans2 = decodeJwt("sdfsdf");
//  console.log(ans2);
