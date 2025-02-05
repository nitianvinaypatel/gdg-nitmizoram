const MemberCard = ({ filteredMembers }) => {
  const yellowCardMembers = [
    "Piyush Dev",
    "Priyanka",
    "Dhanush",
    "Ayush Raj",
    "Vinay Patel",
  ];

  const renderMemberSection = (position, title) => {
    const members = filteredMembers.filter(
      (member) => member.position === position
    );
    if (members.length === 0) return null;

    return (
      <div className="member-section">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member) => {
            const isYellowCard = yellowCardMembers.includes(member.name);
            return (
              <div
                key={member._id}
                className={`border border-gray-300 rounded-lg overflow-hidden shadow-sm transform transition-transform hover:scale-105 ${
                  isYellowCard ? "bg-yellow-300" : ""
                }`}
              >
                <img
                  className="w-30 h-30 mx-auto my-2"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-2">
                    {member.speciality}
                  </p>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    {member.position}
                  </p>
                  {isYellowCard && (
                    <span className="block text-center text-xs text-yellow-500 font-semibold bg-yellow-100 px-2 py-1 rounded-full mb-5">
                      GDG Website Creator
                    </span>
                  )}
                  <div className="flex justify-center gap-2 text-white">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-1 px-3 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                        style={{ width: "20px", height: "20px" }}
                      />
                      LinkedIn
                    </a>
                    <a
                      href={member.github}
                      className="flex items-center gap-2 py-1 px-3 bg-gray-700 text-white text-sm rounded hover:bg-gray-800"
                      target="_blank"
                    >
                      <box-icon type="logo" name="github"></box-icon>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="members p-6 space-y-6">
      {renderMemberSection("Lead", "Lead")}

      {renderMemberSection("Moderator", "Moderator")}

      {renderMemberSection("Core Member", "Core Members")}

      {renderMemberSection("Member", "Members")}
    </div>
  );
};

export default MemberCard;
