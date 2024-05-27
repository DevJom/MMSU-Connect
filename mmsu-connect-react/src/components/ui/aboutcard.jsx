const Aboutcard = () => {
  return (
    <>
      <div className="card text-6xl text-center font-bold pt-14 ">
        <h1>Welcome to MMSU Connects</h1>
      </div>

      <div className="card text-lg mt-6 text-center">
        <p>
          Empowering students to achieve their fullest potential through
          academic excellence, <br />
          personal growth, and community involvement
        </p>
      </div>

      <div className="carousel w-full justify-center my-14">
        <div className="carousel-item ">
          <img
            src="https://images.pexels.com/photos/6147365/pexels-photo-6147365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[900px] rounded-ss-[200px] rounded-br-[200px]"
          />
        </div>
      </div>

      <div className="card flex flex-row items-start justify-center space-x-8 pb-14 shadow-md rounded-md">
        <div className="flex flex-col space-y-4">
          <div className="mission">
            <h1 className="text-xl font-bold">Mission</h1>
            <p className="text-lg">
              To provide a dynamic and inclusive platform for students,
              <br />
              faculty, and alumni of Mariano Marcos State University (MMSU)
              <br /> to engage, collaborate, and share knowledge.
            </p>
          </div>
          <div className="vision">
            <h1 className="text-xl font-bold">Vision</h1>
            <p className="text-lg">
              To be the leading online community for Mariano Marcos State
              University,
              <br /> where members are empowered to connect, innovate, <br />
              and make meaningful contributions to the university and society.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="values">
            <h1 className="text-xl font-bold">Values</h1>
            <div className="w-[300px]">
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Inclusivity
                </div>
                <div className="collapse-content">
                  <p>
                    We welcome and respect all members of the MMSU community,
                    ensuring that every voice is heard and valued.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Collaboration
                </div>
                <div className="collapse-content">
                  <p>
                    We encourage teamwork and the sharing of knowledge,
                    fostering a spirit of mutual support and collective growth.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Innovation
                </div>
                <div className="collapse-content">
                  <p>
                    We embrace new ideas and technologies, encouraging creative
                    thinking and problem-solving within the community.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Lifelong Learning
                </div>
                <div className="collapse-content">
                  <p>
                    We support ongoing education and personal development,
                    providing resources and opportunities for members to expand
                    their horizons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcard;
