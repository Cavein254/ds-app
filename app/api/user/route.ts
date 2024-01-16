import { registerUser } from '@/lib/user/registerUser';
const handler = registerUser;
export { handler as GET, handler as POST };
