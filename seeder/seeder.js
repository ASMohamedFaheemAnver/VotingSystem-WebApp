import fetch from "cross-fetch/polyfill";
import ApolloClient, { gql } from "apollo-boost";
const fs = require("fs");

const client = new ApolloClient({
  uri: "https://freedom-voting-system.herokuapp.com/",
  // uri: "http://localhost:4000/",
  headers: {
    Authorization: process.env.Authorization,
  },
});

function seedMembers() {
  fs.readFile("members-fetched.json", "utf8", async function (err, data) {
    if (err) {
      console.log(err.message);
    }
    const members = JSON.parse(data);
    console.log({ members: members });
    console.log({ membersLength: members.length });

    for (let i = 0; i < members.length; i++) {
      const createMember = gql`
      mutation {
        createMember(data: { secret: "${members[i].secret}", name: "${members[i].name}", year: ${members[i].year}, gender: "${members[i].gender}" }) {
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
}

function getAllMembers() {
  const getAllMembers = gql`
  query {
    getAllMembers {
      _id
      secret
      year
      gender
      name
    }
  }
`;

  client.query({ query: getAllMembers }).then((res) => {
    fs.writeFile(
      "members-fetched.json",
      JSON.stringify(res.data.getAllMembers),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}

function getAllPositions() {
  const getAllPositions = gql`
    query {
      getAllPositions {
        _id
        title
        eligible_year
        eligible_gender
      }
    }
  `;

  client.query({ query: getAllPositions }).then((res) => {
    fs.writeFile(
      "position-fetched.json",
      JSON.stringify(res.data.getAllPositions),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}


function seedPositions() {
  fs.readFile("position-fetched.json", "utf8", async (err, data) => {
    const positions = JSON.parse(data);

    for (let i = 0; i < positions.length; i++) {
      const createPosition = gql`
        mutation {
          createPosition(
            data: {
              title: "${positions[i].title}"
              eligible_year: ${positions[i].eligible_year}
              eligible_gender: "${positions[i].eligible_gender}"
            } ) {
              _id
            }
          }
      `;

      const position = await client.mutate({ mutation: createPosition });
      console.log({ _id: position.data.createPosition._id })
    }
  })
}



function fuckTheBackEndWithHundredsOfConcurrentRequests() {
  fs.readFile("members-fetched.json", "utf8", async function (err, data) {
    if (err) {
      console.log(err.message);
    }
    const members = JSON.parse(data);
    console.log({ members: members });
    console.log({ membersLength: members.length });

    fs.readFile("position-fetched.json", "utf8", async (err, data) => {
      const positions = JSON.parse(data);
      console.log(positions);
      for (let i = 0; i < members.length; i++) {
        const loginMember = gql`
                query {
                    loginMember(data: { secret: "${members[i].secret}" }) {
                      token
                    }
                  }
              `;

        const res = await client.query({ query: loginMember })

        const token = res["data"].loginMember.token;
        console.log({ loginMember: res });

        const client2 = new ApolloClient({
          uri: "https://freedom-voting-system.herokuapp.com/",
          // uri: "http://localhost:4000/",
          headers: {
            Authorization: token,
          },
        });

        const createVotes = gql`
                  mutation {
                    createVotes(
                      data: [
                        {
                          position: "${positions[0]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                          position: "${positions[1]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                          position: "${positions[2]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                          position: "${positions[3]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                          position: "${positions[4]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                        position: "${positions[5]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                          position: "${positions[6]._id}"
                          to: "${members[i]._id}"
                        }
                        {
                          position: "${positions[7]._id}"
                          to: "${members[i]._id}"
                        }
                      ]
                    ) {
                      _id
                    }
                  }
                `;

        client2.mutate({ mutation: createVotes }).then(res => {
          console.log({ createVotes: res["data"].createVotes, voter: i })
        }).catch(err => {
          console.log(err)
        })

      }
    })

  });
}

// seedMembers();
// seedPositions();
// getAllPositions();
// getAllMembers();
fuckTheBackEndWithHundredsOfConcurrentRequests();