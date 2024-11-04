import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Jim Jones",
      bio: "A passionate software developer with expertise in React and JavaScript.",
      imgSrc: "./src/images/depositphotos_156365026-stock-photo-tech-savvy-young-man-smiling.jpg",
      profession: "Software Developer",
    },
    shows: false,
    mountedTime: Date.now(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeInterval: Math.floor((Date.now() - this.state.mountedTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { shows, person, timeInterval } = this.state;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <button
          onClick={this.toggleShow}
          className="px-4 py-2 mb-6 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="flex flex-col items-center p-6 space-y-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <img src={person.imgSrc} alt="Profile" className="w-32 h-32 rounded-full" />
            <h1 className="text-xl font-bold">{person.fullName}</h1>
            <p className="text-gray-600">{person.bio}</p>
            <p className="text-blue-500">{person.profession}</p>
          </div>
        )}

        <div className="mt-4 text-gray-700">
          Time since last mounted: {timeInterval || 0} seconds
        </div>
      </div>
    );
  }
}

export default App;
