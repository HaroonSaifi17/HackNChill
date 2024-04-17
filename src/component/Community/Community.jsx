import React from "react";


const SponsorCard = ({imgName, alt, className}) => (
    <div className={"h-44 w-80 lg:w-80 lg:h-44  cursor-pointer bg-line " + className}>
      <img
          src={imgName}
          alt={alt}
          className="h-full bg-white w-full  translate-x-2 -translate-y-2"
      />
    </div>
)

const Community = ({ head, id }) => {

  // GDSC ABESIT
  // Decentraclasses
  // GDSC-DTC
  // GDSC Dronacharya College Of Engineering
  // GDSC VELTECH
  // GDSC Gitam Visakhapatnam
  // TensorFlow User Group Ghaziabad
  // Open Community of Developers (OCD) India
  // DevSource Community
  // 15forteen
  // GDSC JIIT-128
  // ALL IPU COMMUNITY
  // GDSC DGI
  // Fresources
  // IIITd
  // GDSC IGDTUW

  return (
    <div>
      <div>
        <div className="max-w-screen-2xl mx-auto px-[5vw] pb-[4rem]">
          <div className="headingDivSponsor">
            <div className="headingDivSponsorMain">
              {head
                .split(" ")
                .slice(0, head.split(" ").length - 1)
                .join(" ")}
            </div>
            <div className="headingDivSponsorSub">
              {head.split(" ")[head.split(" ").length - 1]}
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4">
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <SponsorCard imgName={"assets/community/GDSC_DCEV.png"} alt={"GDSC DCEV"} />
                <SponsorCard imgName={"assets/community/GDSC_IGDTUW.png"} alt={"GDSC IGDTUW"} />
                <SponsorCard imgName={"assets/community/IIITD.jpeg"} alt={"IIITD"} />
                <SponsorCard imgName={"assets/community/GDSC_ABESIT.png"} alt={"GDSC ABESIT"} />
                <SponsorCard imgName={"assets/community/DevSource.jpeg"} alt={"DevSource Community"} />
                <SponsorCard imgName={"assets/community/Fresources.png"} alt={"Fresources"} />
                <SponsorCard imgName={"assets/community/GDSC_DTC.png"} alt={"GDSC DTC"} />
                <SponsorCard imgName={"assets/community/All_IPU_COMMUNITY.jpeg"} alt={"All IPU COMMUNITY"} />
                <SponsorCard imgName={"assets/community/GDSC_JIIT-128.png"} alt={"GDSC JIIT"} />
                <SponsorCard imgName={"assets/community/GDSC_DGI.png"} alt={"GDSC DGI"} />
                <SponsorCard imgName={"assets/community/GDSC_GV.png"} alt={"GDSC GV"} />
                <SponsorCard imgName={"assets/community/GDSC_VELTECH.png"} alt={"GDSC VELTECH"} />
                <SponsorCard imgName={"assets/community/OCD.jpeg"} alt={"Open Community of Developers (OCD India)"} />
                <SponsorCard imgName={"assets/community/TF_Ghaziabad.jpeg"} alt={"TensorFlow User Group Ghaziabad "} />
                <SponsorCard imgName={"assets/community/decentraclasses.png"} alt={"decentraclasses"} />
                <SponsorCard imgName={"assets/community/15Forteen.jpeg"} alt={"15Forteen"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
