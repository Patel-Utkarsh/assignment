import { FaLongArrowAltRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const stoaProgramBenefits = [
    "23+ learning sprints led by industry experts",
    "Access to career mentoring and coaching sessions",
    "Lifetime access to the Stoa Community",
    "Access to career services and the Charter exam",
    "Much more"
];

const stoaProgramSteps = [
    {
      title: "Join the Info Session",
      description: "Get an overview of the Program and Charter and understand if it’s the right fit for you."
    },
    {
      title: "Personal Interview",
      description: "For us to understand your goals and estimate how you would fit with the Stoa Community."
    },
    {
      title: "Program Walkthrough",
      description: "Go through your journey at Stoa and get your questions answered."
    },
    {
      title: "Confirm your Seat",
      description: "Confirm your seat by paying the program fee and you are set!"
    }
  ];
  

  
function MiddleSection2() {
  return (
    <div className="w-[100%] bg-red-950 p-5 ">
      <div className="mt-5 flex flex-col gap-3 justify-center">
        <p className="text-white text-4xl font-bold text-center">
          Ready to level up?
        </p>
        <p className="text-gray-400 text-xl text-center">
          Attend an info session to understand how Stoa can benefit you.
        </p>
        <div className="flex bg-yellow-400 px-5 gap-2 mx-auto rounded-sm">
          <button className="  mx-auto py-2 text-black  font-semibold">
            REGISTER FOR INFO SESSION
          </button>
          <FaLongArrowAltRight
            size={25}
            color="black"
            style={{ marginTop: 7 }}
          />
        </div>
        <p className="text-yellow-400 mt-3 text-center font-semibold text-sm">
          NEXT COHORT STARTS 5TH JANUARY 2024
        </p>
      </div>

      <div className="w-[70%] mx-auto flex justify-around mt-5">
        <div className=" w-[400px] bg-white p-5 rounded-sm ">
            <p className="text-red-700 font-bold text-xl">Pricing</p>
            <p className="text-black font-bold text-xl mt-3">2.95L + 18% GST</p>
            <p className="text-red-700 font-bold text-md mt-3">What you get</p>

            <div className="mt-5 flex flex-col gap-3">
                {
                    stoaProgramBenefits.map((data,index)=>(
                        <div key={index} className="flex text-black">
                            <TiTick className="mt-1" color="green"/>
                            <p>{data}</p>
                        </div>
                    ))
                }
            </div>

        </div>

        <div className=" w-[400px] bg-white p-5 rounded-sm">
        <p className="text-red-700 font-bold text-xl">Admission process</p>
        <div className="flex flex-col mt-3">
            {
                stoaProgramSteps.map(({title,description},index)=>(
                    <div className="flex flex-col text-black gap-1" key={index}>
                        <div className="flex gap-1">
                            <div>◉</div>
                        <p className="font-semibold">{title}</p>


                        </div>
                         <p className="text-slate-400 ml-3">{description}</p>
                    </div>

                ))
            }
        </div>

        </div>
      </div>
    </div>
  );
}

export default MiddleSection2;
