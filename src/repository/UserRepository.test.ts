import { Connection } from 'typeorm';
import connectDB, { getUserRepository } from '.';

let conn: Connection;
beforeAll(async () => {
  conn = await connectDB();
});
afterAll(async () => {
  await conn.close();
});

describe('User Repository test', () => {
  it('email을 인자로 전달하여 user를 생성한다.', async () => {
    const email = 'abc@gmail.com';
    await getUserRepository().createByEmail(email);
    const user = await getUserRepository().find({ email });
    expect(user).toHaveLength(1);
    expect(user[0].email).toEqual(email);
  });
});
