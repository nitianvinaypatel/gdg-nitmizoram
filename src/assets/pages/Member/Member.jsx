import { team } from "../../asset/team/team";
import MemberCard from "./MemberCard";

const Member = ({
  setFilterPosition,
  filterPosition,
  filterSpeciality,
  toggleFilterSpeciality,
}) => {
  const members = [
    {
      _id: "a_a",
      name: "Vinay Patel",
      speciality: "",
      position: "Lead",
      image: team.vinay,
      linkedin: "https://www.linkedin.com/in/nitianvinaypatel",
      github: "https://github.com/nitianvinaypatel",
    },
    {
      _id: "aan",
      name: "Snehil Verma",
      speciality: "AI/ML",
      position: "Moderator",
      image: team.snehil,
      linkedin: "https://www.linkedin.com/in/snehil-verma-1b685b252",
      github: "",
    },
    {
      _id: "aaa",
      name: "Manoj Kumar Sharma",
      speciality: "Android Development",
      position: "Moderator",
      image: team.manoj,
      linkedin: "http://linkedin.com/in/manoj-kumar-sharma-231601228",
      github: "http://github.com/manojsharma731",
    },
    {
      _id: "aab",
      name: "Ramu Yadav",
      speciality: "Android Development",
      position: "Core Member",
      image: team.ramu,
      linkedin: "https://www.linkedin.com/in/mrkhiladi123",
      github: "https://github.com/Mrkhiladi-star",
    },
    {
      _id: "aac",
      name: "Raju Kumar",
      speciality: "Web Development",
      position: "Moderator",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
      linkedin: "",
      github: "",
    },
    {
      _id: "aae",
      name: "Mohammad Rehan",
      speciality: "Web Development",
      position: "Member",
      image: team.rehan,
      linkedin: "https://www.linkedin.com/in/mohammad-rehan-7b13262ba",
      github: "https://github.com/Mohammad-Rehan0403",
    },
    {
      _id: "aaf",
      name: "Piyush Dev",
      speciality: "Cybersecurity",
      position: "Core Member",
      image: team.piyush,
      linkedin:
        "https://www.linkedin.com/in/piyush-dev-bb9838319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Piyush-sudo-007",
    },
    {
      _id: "aag",
      name: "Priyanka",
      speciality: "Cybersecurity",
      position: "Core Member",
      image: team.priyanka,
      github: "mailto:emilydavis@github.com",
    },
    {
      _id: "aav",
      name: "Ayush Raj",
      speciality: "Web Development",
      position: "Core Member",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGpGnhX-FsCIw/profile-displayphoto-shrink_200_200/B4DZRA3HXxG0Ac-/0/1736254985155?e=1743033600&v=beta&t=yy3N3BVWAknmRzTtbIxvSjMgQKo3KB_AeIRR5ZXZTQY",
      linkedin: "https://www.linkedin.com/in/ayusharyanraj",
      github: "mailto:chrisbrown@github.com",
    },
    {
      _id: "abb",
      name: "Dhanush",
      speciality: "AI/ML",
      position: "Core Member",
      image: team.dhanush,
      linkedin: "https://www.linkedin.com/in/dhanush-reddy-2611b329a/",
      github: "https://github.com/Dhanush0706",
    },
    {
      _id: "aad",
      name: "Priyanshu Agrawal",
      speciality: "Web Development",
      position: "Core Member",
      image: team.priyanshuAgarwal,
      linkedin:
        "https://www.linkedin.com/in/priyanshu-agrawal-0924aa319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/priyanshu-agrawal-cse",
    },
    {
      _id: "aab1",
      name: "Vikash Kumar",
      speciality: "Android Development",
      position: "Core Member",
      image: team.vikash_kumar,
      linkedin: "https://www.linkedin.com/in/vikash-kumar-b53055309",
      github: "https://github.com/Vikash-Kumar-54321",
    },
    {
      _id: "aah",
      name: "Atul Kumar",
      speciality: "Cloud Computing",
      position: "Moderator",
      image: team.atul,
      linkedin: "https://www.linkedin.com/in/atul-kumar-6b45652b5/",
      github: "https://github.com/Atul772",
    },
    {
      _id: "abh",
      name: "Aniket Kumar",
      speciality: "Cloud Computing",
      position: "Core Member",
      image: team.aniket,
      linkedin:
        "https://www.linkedin.com/in/aniket-kumar-1225a7284/?originalSubdomain=in",
      github: "https://github.com/aniket821108",
    },
    {
      _id: "aai",
      name: "Shivam Dwivedi",
      speciality: "Cybersecurity",
      position: "Core Member",
      image: team.shivam,
      linkedin:
        "https://www.linkedin.com/in/shivam-dwivedi-099885330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "mailto:chrisbrown@github.com",
    },
    {
      _id: "aaj",
      name: "Abdul Muid",
      speciality: "Cybersecurity",
      position: "Moderator",
      image: team.abdul,
      linkedin: "https://www.linkedin.com/in/abdul-muid-00973b264/",
      github: "https://github.com/Abdul8081",
    },
    {
      _id: "aak",
      name: "Lucky",
      speciality: "Frontend Developer",
      position: "Moderator",
      image: team.lucky,
      linkedin: "https://www.linkedin.com/in/lucky-463472261/",
      github: "https://github.com/LuckyNitmz",
    },
    {
      _id: "aal",
      name: "Naivedya Baranwal",
      speciality: "UI/UX",
      position: "Moderator",
      image: team.naivedya,
      linkedin: "https://www.linkedin.com/in/naivedya-baranwal-a10360260/",
      github: "https://github.com/Naivedya-Baranwal",
    },
    {
      _id: "aam",
      name: "Raviranjan Kumar",
      speciality: "Deep Learning",
      position: "Moderator",
      image: team.ravuranjan,
      linkedin: "https://in.linkedin.com/in/raviranjan-kumar-18b5652b5",
      github: "https://github.com/kumarranjan78084",
    },
    {
      _id: "aao",
      name: "Aditya Srivastav",
      speciality: "Backend Development",
      position: "Moderator",
      image: team.aditya,
      linkedin: "https://www.linkedin.com/in/aditya-srivastav-125744276",
      github: "https://github.com/AdityacodeNIT",
    },
    {
      _id: "aap",
      name: "Isaac Lalramnghaka",
      speciality: "Data Analyst",
      position: "Moderator",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
      linkedin: "",
      github: "",
    },
    {
      _id: "aaq",
      name: "Md Sibtain",
      speciality: "Data Science",
      position: "Moderator",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
      linkedin: "",
      github: "",
    },
    {
      _id: "aar",
      name: "Tanmay Kumar",
      speciality: "Blockchain Developer",
      position: "Moderator",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
      linkedin: "",
      github: "",
    },
    {
      _id: "aas",
      name: "Tata sai Vivek",
      speciality: "Game Developer",
      position: "Moderator",
      image: team.saiVivek,
      linkedin: "https://www.linkedin.com/in/sai-vivek-tata-049210280",
      github: "https://github.com/vivekvardhan7",
    },
    {
      _id: "aat",
      name: "Ahad Saikh",
      speciality: "DevOps",
      position: "Moderator",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
      linkedin: "",
      github: "",
    },
    {
      _id: "aau",
      name: "Karuna Bishnoi",
      speciality: "Web Development",
      position: "Moderator",
      image: team.karuna,
      linkedin: "https://www.linkedin.com/in/karuna-bishnoi/",
      github: "https://github.com/Karuna56-bishnoi",
    },
    {
      _id: "aa_",
      name: "Harsh Kumar",
      speciality: "Web Development",
      position: "Member",
      image: team.harsh,
      linkedin:
        "https://www.linkedin.com/in/harsh-kumar-27a6b5304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },

    {
      _id: "aaw",
      name: "Neha Kumari",
      speciality: "Web Development",
      position: "Core Member",
      image: team.nehaKumari,
      linkedin:
        "https://www.linkedin.com/in/neha-garg-a31a992ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Nehagarg876",
    },
    {
      _id: "aax",
      name: "Saurabh Verma",
      speciality: "Frontend Developer",
      position: "Core Member",
      image: team.saurabhVerma,
      linkedin:
        "https://www.linkedin.com/in/saurabh-verma-2b87a9290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://saurabhverma9731256232.github/",
    },
    {
      _id: "_ax",
      name: "Saurabh",
      speciality: "Frontend Developer",
      position: "Core Member",
      image: team.saurabh,
      linkedin: "https://www.linkedin.com/in/saurabh-yadav-58221a244/",
      github: "https://github.com/Saurabhyadav3010",
    },
    {
      _id: "aay",
      name: "Shubham Kumar",
      speciality: "Frontend Developer",
      position: "Core Member",
      image: team.saurabhKumar,
      linkedin:
        "https://www.linkedin.com/in/shubham-kumar-68a31b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Shubhamkumsingh",
    },
    {
      _id: "aaz",
      name: "Arman Kumar",
      speciality: "Frontend Developer",
      position: "Core Member",
      image: team.arman,
      linkedin:
        "https://www.linkedin.com/in/arman-kumar-760043282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Arman-Kumar01",
    },
    {
      _id: "aba",
      name: "Anurag Singh",
      speciality: "Web Development",
      position: "Core Member",
      image: team.anurag,
      linkedin:
        "https://www.linkedin.com/in/anurag-singh-a4337816a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/anurag5409",
    },
    {
      _id: "abc",
      name: "Richa Ray",
      speciality: "AI/ML",
      position: "Core Member",
      image: team.richa,
      linkedin: "https://www.linkedin.com/in/richa-ray-z341/",
      github: "https://github.com/richaray",
    },
    {
      _id: "abd",
      name: "Nishant raj",
      speciality: "Backend Development",
      position: "Core Member",
      image: team.nishant,
      linkedin: "http://www.linkedin.com/in/nishant-raj-7b9169275",
      github: "https://github.com/NishantsCode",
    },
    {
      _id: "abe",
      name: "Mahendra Pal",
      speciality: "Web Development",
      position: "Member",
      image: team.mahendra,
      linkedin:
        "https://www.linkedin.com/in/mahendrapal-bhalothiya-b041172b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abf",
      name: "Mahak Singh",
      speciality: "AI/ML",
      position: "Member",
      image: team.mahak,
      linkedin:
        "https://www.linkedin.com/in/mahak-singh-b-tech-292898341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abg",
      name: "Sai Shubham Biswal",
      speciality: "AI/ML",
      position: "Member",
      image: team.saisubham,
      linkedin: "https://in.linkedin.com/in/sai-shubham-biswal-8a2461305",
      github: "https://github.com/SaiShubham006",
    },
    {
      _id: "abh",
      name: "Vansh kailwal",
      speciality: "Frontend Developer",
      position: "Member",
      image: team.vansh,
      linkedin: "",
      github: "",
    },
    {
      _id: "abi",
      name: "Gorla Hema Sai Hasini",
      speciality: "AI/ML",
      position: "Member",
      image: team.saiHasini,
      linkedin:
        "https://www.linkedin.com/in/hema-sai-hasini-gorla-04346832a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abj",
      name: "ROUTHU DEVAVARSHINI",
      speciality: "Game Developer",
      position: "Member",
      image: team.devavarshini,
      linkedin:
        "https://www.linkedin.com/in/deva-varshini-routhu-54a497322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abk",
      name: "Ridhima Raj",
      speciality: "Data Analyst",
      position: "Member",
      image: team.ridhima,
      linkedin: "https://www.linkedin.com/in/ridima-raj-373b7125a/",
      github: "https://github.com/ridimacodes",
    },
    {
      _id: "abl",
      name: "Satya Keerthika",
      speciality: "AI/ML",
      position: "Member",
      image: team.keerthika,
      linkedin:
        "https://www.linkedin.com/in/satya-keerthika-86b93332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abl1",
      name: "Sreelekha",
      speciality: "AI/ML",
      position: "Member",
      image: team.sreelekha,
      linkedin: "https://www.linkedin.com/in/sreelekha-nampally",
      github: "https://github.com/nsreelekha",
    },
    {
      _id: "abl2",
      name: "Nitin Chowdhary",
      speciality: "AI/ML",
      position: "Member",
      image: team.nitin,
      linkedin:
        "https://www.linkedin.com/in/nithin-choudary-n-423644290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/NithinChoudaryNallabothula",
    },
    {
      _id: "abl3",
      name: "Harshvardhan",
      speciality: "AI/ML",
      position: "Member",
      image: team.harshvardhan,
      linkedin:
        "https://www.linkedin.com/in/harshavardhan-nuka?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abm",
      name: "Priyanshu Kumari",
      speciality: "AI/ML",
      position: "Core Member",
      image: team.priyanshu,
      linkedin: "https://www.linkedin.com/in/priyanshu-kumari-2a7bb4317",
      github: "",
    },
    {
      _id: "abn",
      name: "Karthik",
      speciality: "Web Development",
      position: "Member",
      image: team.karthik,
      linkedin:
        "https://www.linkedin.com/in/jureddi-karthik-b-tech-98607933a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abn1",
      name: "Ayesha",
      speciality: "Web Development",
      position: "Member",
      image: team.ayesha,
      linkedin: "https://www.linkedin.com/in/ayesha-ayesha-75a505340/",
      github: "https://github.com/aish-hub-cell",
    },
    {
      _id: "abo",
      name: "Satvik Sharma",
      speciality: "Cloud Computing",
      position: "Member",
      image: team.satvik,
      linkedin:
        "https://www.linkedin.com/in/satviksharmaa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abp",
      name: "Rahul Tudu",
      speciality: "Web Development",
      position: "Member",
      image: team.rahulTudu,
      linkedin: "http://www.linkedin.com/in/rahul-tudu-r",
      github: "https://github.com/rahul-tudu-R",
    },
    {
      _id: "abp1",
      name: "Harshita Sinha",
      speciality: "Web Development",
      position: "Member",
      image: team.harshita,
      linkedin:
        "https://www.linkedin.com/in/harshita-sinha-730688342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abp2",
      name: "Vivek Kumar",
      speciality: "Web Development",
      position: "Member",
      image: team.vivekKumar,
      linkedin:
        "https://www.linkedin.com/in/vivek-kumar-385a1a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abp3",
      name: "Dilip Sahu",
      speciality: "Web Development",
      position: "Member",
      image: team.dilip,
      linkedin:
        "https://www.linkedin.com/in/dilip-sahu-7b8789324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Dilipsahu01",
    },
    {
      _id: "abq",
      name: "Khush Kataria",
      speciality: "UI/UX",
      position: "Core Member",
      image: team.khush,
      linkedin:
        "https://www.linkedin.com/in/khush-katariya-70a91a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Infernosstar",
    },
    {
      _id: "abr",
      name: "Vikash Kumar Karwar",
      speciality: "Web Development",
      position: "Core Member",
      image: team.vikash,
      linkedin:
        "https://www.linkedin.com/in/vikash-kumar-kharwar-142157265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/VIKASH1596KUMARKHARWAR",
    },
    {
      _id: "abs",
      name: "Uttkarsh Tiwari",
      speciality: "Web Development",
      position: "Member",
      image: team.uttkarsh,
      linkedin:
        "https://www.linkedin.com/in/uttkarsh-tiwari-60922a285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Uttkarsh779",
    },
    {
      _id: "abt",
      name: "V. Vyshnavi",
      speciality: "Web Development",
      position: "Member",
      image: team.vyshanvi,
      linkedin:
        "https://www.linkedin.com/in/vyshnavi-vanapalli-04a179345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
    {
      _id: "abu",
      name: "Thanmai",
      speciality: "Web Development",
      position: "Member",
      image: team.thanmai,
      linkedin:
        "https://www.linkedin.com/in/thanmai-bijjala-69b501345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "",
    },
  ];

  const handlePositionChange = (event) => {
    setFilterPosition(event.target.value);
  };
  const handleSpecialityChange = (event) => {
    toggleFilterSpeciality(event.target.value);
  };

  const filteredMembers = members.filter((member) => {
    return (
      (!filterSpeciality || member.speciality === filterSpeciality) &&
      (!filterPosition || member.position === filterPosition)
    );
  });

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      {/* Main content area */}
      <div className="flex-grow">
        {/* Header section */}
        <div className="flex justify-between items-center mb-4">
          {/* Horizontal Filter Controls */}
          <div className="flex items-center gap-6">
            {/* Specialities Dropdown Filter */}
            <div className="relative">
              <label className="font-bold text-gray-700 block mb-2">
                Specialities
              </label>
              <select
                value={filterSpeciality}
                onChange={handleSpecialityChange}
                className="py-2 px-4 border rounded text-sm bg-gray-100 text-gray-800 cursor-pointer"
              >
                <option value="">Select Speciality</option>
                {[
                  "DevOps",
                  "Android Development",
                  "Web Development",
                  "Cybersecurity",
                  "Cloud Computing",
                  "Frontend Developer",
                  "UI/UX",
                  "Deep Learning",
                  "AI/ML",
                  "Backend Development",
                  "Data Analyst",
                  "Data Science",
                  "Blockchain Developer",
                  "Game Developer",
                  "Graphic Designer",
                ].map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Position Filter */}
            <div>
              <label className="font-bold text-gray-700 block mb-2">
                Position
              </label>
              <select
                className="py-2 px-4 border rounded text-sm bg-gray-100 text-gray-800"
                value={filterPosition}
                onChange={handlePositionChange}
              >
                <option value="">All Positions</option>
                <option value="Lead">Lead</option>
                <option value="Moderator">Moderator</option>
                <option value="Core Member">Core Member</option>
                <option value="Member">Member</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members grid */}

        <MemberCard filteredMembers={filteredMembers} />
      </div>
    </div>
  );
};

export default Member;
