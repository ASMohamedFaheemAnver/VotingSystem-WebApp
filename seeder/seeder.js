import fetch from "cross-fetch/polyfill";
import ApolloClient, { gql } from "apollo-boost";
const fs = require("fs");

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  headers: {
    Authorization: process.env.Authorization,
  },
});

fs.readFile("members.json", "utf8", async function (err, data) {
  if (err) {
    console.log(err.message);
  }
  const members = JSON.parse(data);
  console.log({ members: members });
  console.log({ membersLength: members.length });

  for (let i = 0; i < members.length; i++) {
    const createMember = gql`
      mutation {
        createMember(data: { name: "${members[i].name}", year: ${members[i].year}, gender: "${members[i].gender}" }) {
          _id
        }
      }
    `;

    const member = await client.mutate({ mutation: createMember });
    console.log({
      numberOfMembersCreated: i,
      member: member.data.createMember._id,
    });
  }

  console.log({ msg: "Done." });
});