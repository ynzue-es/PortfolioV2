import { Reveal } from "../my-ui/reveal";

const Services = () => {

    const service_cards = {
        number: ["01", "02", "03", "04"],
        title: ["Software", "Web app", "Automate", "Data"],
        description: [
            "Build software using C language.",
            "Develop web applications using React and Django.",
            "Automate processes using Python and n8n.",
            "Data analysis and machine learning projects."
        ],
        av1: ["Programming", "Agile Development", "Integration", "Architecture"],
        av2: ["API", "Frontend", "Backend", "Testing"],
        av3: ["AI Tools", "Server", "Performance", "OOP"],
        av4: ["Cloud", "Database", "Business Intelligence", "Data Analysis"],
    };

    const styleBubble = {
        margin:"10px",
        border: "1px solid grey",
        borderRadius: "50px",
        padding: "10px",
    }

    const styleImage = {
        margin:"10px",
        height:"40px"
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[70%] flex flex-col text-left pt-20 gap-24">
                <Reveal className="px-8 md:pl-24">
                    <p className="font-mono text-gray-400 font-semibold">SERVICES</p>
                    <h2 className="text-5xl md:text-[5vw] leading-none">Versatile & <br/> Results-Driven</h2>
                </Reveal>
                <p className="text-[5vw] md:text-4xl md:w-[50%] md:pl-24 px-8">
                    An all-in-one solution—everything you need to bring your vision to life, from start to finish.
                </p>
                <div className="flex md:flex-row flex-col">
                    { service_cards.number.map((item, index) => (
                            <Reveal key={index} delay={index * 0.1} className="w-[100%] md:w-[25%] border p-8 flex flex-col gap-8">
                                <div>
                                    <div key={index} className="border rounded-full w-12 h-12 flex justify-center items-center font-mono">{item}</div>
                                    <h3 className="mt-4 font-bold text-2xl md:text-[2vw] leading-none">{service_cards.title[index]}</h3>
                                </div>
                                <p>{service_cards.description[index]}</p>
                                <div>
                                    <p>{service_cards.av1[index]}</p>
                                    <p>{service_cards.av2[index]}</p>
                                    <p>{service_cards.av3[index]}</p>
                                    <p>{service_cards.av4[index]}</p>
                                </div>
                            </Reveal>
                        ))
                    }

                </div>
            </div>
            <div className="md:w-[30%] w-[100%] p-16 border-l border-b text-left">
                <p className="font-mono text-gray-400 mb-6">SECTORS</p>
                <div className="flex flex-wrap">
                    <p style={styleBubble}>Sports</p>
                    <p style={styleBubble}>Education</p>
                    <p style={styleBubble}>Social Media</p>
                    <p style={styleBubble}>Arts</p>
                    <p style={styleBubble}>Fintech</p>
                    <p style={styleBubble}>Web 3</p>
                </div>
                <p className="font-mono text-gray-400 mb-6 mt-16 text-left">CURRENT STACK</p>
                <div className="flex flex-wrap">
                    <img style={styleImage} src="/images/stack/azure.png"></img>
                    <img style={styleImage} src="/images/stack/c.png"></img>
                    <img style={styleImage} src="/images/stack/c++.png"></img>
                    <img style={styleImage} src="/images/stack/excel.png"></img>
                    <img style={styleImage} src="/images/stack/figma.png"></img>
                    <img style={styleImage} src="/images/stack/git.png"></img>
                    <img style={styleImage} src="/images/stack/n8n.png"></img>
                    <img style={styleImage} src="/images/stack/playwright.png"></img>
                    <img style={styleImage} src="/images/stack/postgre.png"></img>
                    <img style={styleImage} src="/images/stack/powerbi.png"></img>
                    <img style={styleImage} src="/images/stack/python.png"></img>
                    <img style={styleImage} src="/images/stack/react.png"></img>
                    <img style={styleImage} src="/images/stack/selenium.png"></img>
                    <img style={styleImage} src="/images/stack/uipath.png"></img>
                </div>
            </div>
        </div>
    );
};

export default Services