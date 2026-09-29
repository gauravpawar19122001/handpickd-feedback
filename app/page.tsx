"use client";

import { supabase } from "../lib/supabase";

import { useState } from "react";

const cities = [
  // Andhra Pradesh
  {
    name: "Visakhapatnam",
    aliases: ["Visakhapatnam", "Vizag", "Vishakhapatnam"],
  },
  {
    name: "Vijayawada",
    aliases: ["Vijayawada", "Bezawada"],
  },
  {
    name: "Tirupati",
    aliases: ["Tirupati"],
  },

  // Arunachal Pradesh
  {
    name: "Itanagar",
    aliases: ["Itanagar"],
  },
  {
    name: "Naharlagun",
    aliases: ["Naharlagun"],
  },
  {
    name: "Pasighat",
    aliases: ["Pasighat"],
  },

  // Assam
  {
    name: "Guwahati",
    aliases: ["Guwahati", "Gauhati"],
  },
  {
    name: "Dibrugarh",
    aliases: ["Dibrugarh"],
  },
  {
    name: "Silchar",
    aliases: ["Silchar"],
  },

  // Bihar
  {
    name: "Patna",
    aliases: ["Patna"],
  },
  {
    name: "Gaya",
    aliases: ["Gaya"],
  },
  {
    name: "Muzaffarpur",
    aliases: ["Muzaffarpur"],
  },

  // Chhattisgarh
  {
    name: "Raipur",
    aliases: ["Raipur"],
  },
  {
    name: "Bhilai",
    aliases: ["Bhilai"],
  },
  {
    name: "Bilaspur",
    aliases: ["Bilaspur"],
  },

  // Goa
  {
    name: "Panaji",
    aliases: ["Panaji", "Panjim"],
  },
  {
    name: "Margao",
    aliases: ["Margao", "Madgaon"],
  },
  {
    name: "Vasco da Gama",
    aliases: ["Vasco da Gama", "Vasco"],
  },

  // Gujarat
  {
    name: "Ahmedabad",
    aliases: ["Ahmedabad", "Ahemdabad"],
  },
  {
    name: "Surat",
    aliases: ["Surat"],
  },
  {
    name: "Vadodara",
    aliases: ["Vadodara", "Baroda"],
  },

  // Haryana
  {
    name: "Gurugram",
    aliases: ["Gurugram", "Gurgaon", "Gudgao"],
  },
  {
    name: "Faridabad",
    aliases: ["Faridabad"],
  },
  {
    name: "Panipat",
    aliases: ["Panipat"],
  },

  // Himachal Pradesh
  {
    name: "Shimla",
    aliases: ["Shimla"],
  },
  {
    name: "Dharamshala",
    aliases: ["Dharamshala", "Dharamsala"],
  },
  {
    name: "Solan",
    aliases: ["Solan"],
  },

  // Jharkhand
  {
    name: "Ranchi",
    aliases: ["Ranchi"],
  },
  {
    name: "Jamshedpur",
    aliases: ["Jamshedpur", "Tatanagar"],
  },
  {
    name: "Dhanbad",
    aliases: ["Dhanbad"],
  },

  // Karnataka
  {
    name: "Bengaluru",
    aliases: ["Bengaluru", "Bangalore", "Banglore", "Bangaluru"],
  },
  {
    name: "Mysuru",
    aliases: ["Mysuru", "Mysore"],
  },
  {
    name: "Mangaluru",
    aliases: ["Mangaluru", "Mangalore"],
  },

  // Kerala
  {
    name: "Kochi",
    aliases: ["Kochi", "Cochin"],
  },
  {
    name: "Thiruvananthapuram",
    aliases: [
      "Thiruvananthapuram",
      "Trivandrum",
      "Thiruvananthapuram",
    ],
  },
  {
    name: "Kozhikode",
    aliases: ["Kozhikode", "Calicut"],
  },

  // Madhya Pradesh
  {
    name: "Indore",
    aliases: ["Indore"],
  },
  {
    name: "Bhopal",
    aliases: ["Bhopal"],
  },
  {
    name: "Jabalpur",
    aliases: ["Jabalpur"],
  },

  // Maharashtra
  {
    name: "Mumbai",
    aliases: ["Mumbai", "Bombay"],
  },
  {
    name: "Pune",
    aliases: ["Pune", "Poona"],
  },
  {
    name: "Nagpur",
    aliases: ["Nagpur"],
  },

  // Manipur
  {
    name: "Imphal",
    aliases: ["Imphal"],
  },
  {
    name: "Thoubal",
    aliases: ["Thoubal"],
  },
  {
    name: "Churachandpur",
    aliases: ["Churachandpur", "Lamka"],
  },

  // Meghalaya
  {
    name: "Shillong",
    aliases: ["Shillong"],
  },
  {
    name: "Tura",
    aliases: ["Tura"],
  },
  {
    name: "Jowai",
    aliases: ["Jowai"],
  },

  // Mizoram
  {
    name: "Aizawl",
    aliases: ["Aizawl", "Aizwal"],
  },
  {
    name: "Lunglei",
    aliases: ["Lunglei"],
  },
  {
    name: "Champhai",
    aliases: ["Champhai"],
  },

  // Nagaland
  {
    name: "Dimapur",
    aliases: ["Dimapur"],
  },
  {
    name: "Kohima",
    aliases: ["Kohima"],
  },
  {
    name: "Mokokchung",
    aliases: ["Mokokchung"],
  },

  // Odisha
  {
    name: "Bhubaneswar",
    aliases: ["Bhubaneswar", "Bhubaneshwar"],
  },
  {
    name: "Cuttack",
    aliases: ["Cuttack"],
  },
  {
    name: "Rourkela",
    aliases: ["Rourkela"],
  },

  // Punjab
  {
    name: "Ludhiana",
    aliases: ["Ludhiana"],
  },
  {
    name: "Amritsar",
    aliases: ["Amritsar"],
  },
  {
    name: "Jalandhar",
    aliases: ["Jalandhar"],
  },

  // Rajasthan
  {
    name: "Jaipur",
    aliases: ["Jaipur"],
  },
  {
    name: "Jodhpur",
    aliases: ["Jodhpur"],
  },
  {
    name: "Udaipur",
    aliases: ["Udaipur"],
  },

  // Sikkim
  {
    name: "Gangtok",
    aliases: ["Gangtok"],
  },
  {
    name: "Namchi",
    aliases: ["Namchi"],
  },
  {
    name: "Gyalshing",
    aliases: ["Gyalshing", "Geyzing"],
  },

  // Tamil Nadu
  {
    name: "Chennai",
    aliases: ["Chennai", "Madras"],
  },
  {
    name: "Coimbatore",
    aliases: ["Coimbatore", "Coimbatore"],
  },
  {
    name: "Madurai",
    aliases: ["Madurai"],
  },

  // Telangana
  {
    name: "Hyderabad",
    aliases: ["Hyderabad"],
  },
  {
    name: "Warangal",
    aliases: ["Warangal"],
  },
  {
    name: "Nizamabad",
    aliases: ["Nizamabad"],
  },

  // Tripura
  {
    name: "Agartala",
    aliases: ["Agartala"],
  },
  {
    name: "Dharmanagar",
    aliases: ["Dharmanagar"],
  },
  {
  name: "Udaipur, Tripura",
  aliases: ["Udaipur Tripura", "Udaipur, Tripura"],
  },

  // Uttar Pradesh
  {
    name: "Lucknow",
    aliases: ["Lucknow"],
  },
  {
    name: "Kanpur",
    aliases: ["Kanpur", "Cawnpore"],
  },
  {
    name: "Varanasi",
    aliases: ["Varanasi", "Banaras", "Benares", "Kashi"],
  },

  // Uttarakhand
  {
    name: "Dehradun",
    aliases: ["Dehradun"],
  },
  {
    name: "Haridwar",
    aliases: ["Haridwar"],
  },
  {
    name: "Haldwani",
    aliases: ["Haldwani"],
  },

  // West Bengal
  {
    name: "Kolkata",
    aliases: ["Kolkata", "Calcutta"],
  },
  {
    name: "Siliguri",
    aliases: ["Siliguri"],
  },
  {
    name: "Durgapur",
    aliases: ["Durgapur"],
  },

  // Union Territories

  // Delhi
  {
    name: "Delhi",
    aliases: ["Delhi", "New Delhi"],
  },

  // Chandigarh
  {
    name: "Chandigarh",
    aliases: ["Chandigarh"],
  },

  // Jammu & Kashmir
  {
    name: "Jammu",
    aliases: ["Jammu"],
  },
  {
    name: "Srinagar",
    aliases: ["Srinagar"],
  },
  {
    name: "Anantnag",
    aliases: ["Anantnag"],
  },

  // Ladakh
  {
    name: "Leh",
    aliases: ["Leh"],
  },
  {
    name: "Kargil",
    aliases: ["Kargil"],
  },

  // Puducherry
  {
    name: "Puducherry",
    aliases: ["Puducherry", "Pondicherry", "Pondy"],
  },
  {
    name: "Karaikal",
    aliases: ["Karaikal"],
  },
  {
    name: "Mahe",
    aliases: ["Mahe", "Mahe Kerala"],
  },

  // Andaman & Nicobar Islands
  {
    name: "Port Blair",
    aliases: ["Port Blair"],
  },
  {
    name: "Diglipur",
    aliases: ["Diglipur"],
  },

  // Lakshadweep
  {
    name: "Kavaratti",
    aliases: ["Kavaratti"],
  },
  {
    name: "Agatti",
    aliases: ["Agatti"],
  },

  // Dadra & Nagar Haveli and Daman & Diu
  {
    name: "Silvassa",
    aliases: ["Silvassa"],
  },
  {
    name: "Daman",
    aliases: ["Daman"],
  },
  {
    name: "Diu",
    aliases: ["Diu"],
  },
];

const creatives = [
  "/Creatives/1_1.png",
  "/Creatives/1.png",
  "/Creatives/2.png",
  "/Creatives/3.png",
  "/Creatives/4.png",
  "/Creatives/5.png",
  "/Creatives/6.png",
  "/Creatives/7.png",
  "/Creatives/Insert Front.png",
  "/Creatives/Whatsapp_1.png",
];

export default function Home() {
const [screen, setScreen] = useState<
  "form" | "instructions" | "swipe" | "ranking" | "final" | "thankyou"
>("form");
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    geography: "",
    shoppingHabit: "",
  });
const [showCities, setShowCities] = useState(false);

  const filteredCities = cities.filter((city) =>
  city.aliases.some((alias) =>
    alias.toLowerCase().includes(form.geography.toLowerCase())
  )
);
const [creativeOrder, setCreativeOrder] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ranking, setRanking] = useState<string[]>([]);
  const [question, setQuestion] = useState<"like" | "dislike" | null>(null);
  const [feedbackData, setFeedbackData] = useState<
  {
    creative: string;
    reaction: "like" | "dislike";
    feedback: string;
  }[]
>([]);
  const [answer, setAnswer] = useState("");


  const [surveyImprovement, setSurveyImprovement] = useState("");
  const [memorableCreative, setMemorableCreative] = useState("");
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragX, setDragX] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Randomize creatives
  const shuffleCreatives = () => {
    const shuffled = [...creatives].sort(() => Math.random() - 0.5);
    return shuffled;
  };

const startTesting = (e: React.FormEvent) => {
  e.preventDefault();

  const shuffled = shuffleCreatives();

  setCreativeOrder(shuffled);
  setCurrentIndex(0);
  setQuestion(null);
  setAnswer("");
  setFeedbackData([]);
  setScreen("instructions");
};

const handleSwipe = (direction: "right" | "left") => {
  if (question) return;

  setQuestion(direction === "right" ? "like" : "dislike");
};

const moveToNextCreative = () => {
  setDragX(0);

  if (currentIndex < creativeOrder.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setScreen("ranking");
  }
};

const submitFeedback = () => {
setFeedbackData((prev) => [
  ...prev,
  {
    creative: creativeOrder[currentIndex],
    reaction: question!,
    feedback: answer,
  },
]);

  setAnswer("");
  setQuestion(null);

  moveToNextCreative();
};


const resetSurvey = () => {
  setForm({
    name: "",
    age: "",
    gender: "",
    geography: "",
    shoppingHabit: "",
  });

  setCreativeOrder([]);
  setCurrentIndex(0);
  setRanking([]);
  setQuestion(null);
  setFeedbackData([]);
  setAnswer("");
  setSurveyImprovement("");
  setMemorableCreative("");
  setDragStart(null);
  setDragX(0);
  setScreen("form");
};
  // Mouse / touch dragging
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragStart(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart !== null) {
      setDragX(e.clientX - dragStart);
    }
  };

  const handlePointerUp = () => {
    if (dragStart === null) return;

    if (dragX > 120) {
      handleSwipe("right");
    } else if (dragX < -120) {
      handleSwipe("left");
    } else {
      setDragX(0);
    }

    setDragStart(null);
  };

  // -------------------------
  // PARTICIPANT FORM
  // -------------------------

  if (screen === "form") {
    return (
      <main className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">

          <div className="text-center mb-10">
            <img
  src="/logo/handpickd-logo.png"
  alt="Handpickd"
  className="mx-auto w-[150px] h-auto"
/>

            <h1 className="text-3xl font-semibold mt-4 text-gray-900">
              Creative Feedback
            </h1>

            <p className="text-gray-500 mt-3 text-sm">
              Help us understand what catches your attention.
            </p>
          </div>

          <form
            onSubmit={startTesting}
            className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
          >

            {/* Name */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-black"
              />
            </div>

            {/* Age */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Enter your age"
                required
                min="13"
                max="100"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-black"              />
            </div>

            {/* Gender */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>

              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-black"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>
              </select>
            </div>

            {/* Geography */}
<div className="mb-5 relative">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    City / Geography
  </label>

  <input
    type="text"
    name="geography"
    value={form.geography}
    onChange={(e) => {
      handleChange(e);
      setShowCities(true);
    }}
    onFocus={() => setShowCities(true)}
    placeholder="Start typing your city"
    required
    autoComplete="off"
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-black"
  />

  {showCities && form.geography && filteredCities.length > 0 && (
    <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      {filteredCities.map((city) => (
        <button
          key={city.name}
          type="button"
          onClick={() => {
            setForm({
              ...form,
              geography: city.name,
            });
            setShowCities(false);
          }}
          className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition"
        >
          {city.name}
        </button>
      ))}
    </div>
  )}
</div>

            {/* Shopping Habit */}
            <div className="mb-7">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shopping Habit
              </label>

              <select
                name="shoppingHabit"
                value={form.shoppingHabit}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-black"
              >
                <option value="">Select one</option>
                <option value="Online">Mostly Online</option>
                <option value="Offline">Mostly Offline</option>
                <option value="Both">Both Online & Offline</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-xl py-3.5 font-medium hover:bg-gray-800 transition"
            >
              Start Creative Testing →
            </button>

          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Your responses will be used for creative research.
          </p>

        </div>
      </main>
    );
  }

// -------------------------
// RANKING SCREEN
// -------------------------

// -------------------------
// INSTRUCTIONS SCREEN
// -------------------------

if (screen === "instructions") {
  return (
    <main className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <img
            src="/logo/handpickd-logo.png"
            alt="Handpickd"
            className="mx-auto w-[130px] h-auto"
          />

          <h1 className="text-2xl font-semibold mt-5">
            How It Works
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Your honest first impression matters.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">

          <div className="space-y-5 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">
                1. Look at one creative
              </p>
              <p className="text-gray-500 mt-1">
                A creative will appear one at a time.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                2. Like or dislike
              </p>
              <p className="text-gray-500 mt-1">
                Swipe right if you like it. Swipe left if you don't.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                3. Tell us why
              </p>
              <p className="text-gray-500 mt-1">
                After every creative, share a quick reason for your choice.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                4. Rank the creatives
              </p>
              <p className="text-gray-500 mt-1">
                At the end, rank all 10 from BEST to WORST.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setScreen("swipe")}
            className="w-full bg-black text-white rounded-xl py-3.5 mt-8 font-medium hover:bg-gray-800 transition"
          >
            Start →
          </button>

        </div>
      </div>
    </main>
  );
}

if (screen === "ranking") {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-5 py-8">
      <div className="w-full max-w-md mx-auto">

        <div className="text-center mb-8">
          <img
            src="/logo/handpickd-logo.png"
            alt="Handpickd"
            className="mx-auto w-[130px] h-auto"
          />

          <h1 className="text-2xl font-semibold mt-4">
            Rank the 10 Creatives
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Click the creatives in order from BEST to WORST.
          </p>

          <p className="text-xs text-gray-400 mt-2">
            1 = BEST · 10 = WORST
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {creativeOrder.map((creative) => {
            const rank = ranking.indexOf(creative) + 1;

            return (
              <button
                key={creative}
                type="button"
                disabled={rank > 0}
                onClick={() => {
                  if (ranking.length < creativeOrder.length) {
                    setRanking([...ranking, creative]);
                  }
                }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
              >
                <img
                  src={creative}
                  alt="Creative"
                  className="w-full h-48 object-contain bg-white"
                />

                {rank > 0 && (
                  <div className="absolute top-2 left-2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    {rank}
                  </div>
                )}
              </button>
            );
          })}
        </div>
        
        
        {ranking.length === creativeOrder.length && (
          <button
            type="button"
            onClick={() => {
              setScreen("final");
            }}
            className="w-full bg-black text-white rounded-xl py-3.5 mt-6 font-medium hover:bg-gray-800 transition"
          >
            Continue →
          </button>
        )}
      </div>
    </main>
  );
}

// -------------------------
// FINAL QUESTIONS SCREEN
// -------------------------

if (screen === "final") {
  return (
    <main className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <img
            src="/logo/handpickd-logo.png"
            alt="Handpickd"
            className="mx-auto w-[130px] h-auto"
          />

          <h1 className="text-2xl font-semibold mt-5">
            One Last Step
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            We'd love to hear a little more from you.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">

          {/* Survey Improvement */}
          <div className="mb-7">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What would you suggest we improve, include, or change in this survey?
            </label>

            <textarea
  rows={5}
  value={surveyImprovement}
  onChange={(e) => setSurveyImprovement(e.target.value)}
  placeholder="Share your thoughts..."
  required
  className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-black resize-none"
/>
          </div>

          {/* Most Memorable Creative */}
          <div className="mb-7">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Which creative do you remember the most?
            </label>

            <textarea
  rows={5}
  value={memorableCreative}
  onChange={(e) => setMemorableCreative(e.target.value)}
  placeholder="Describe the creative you remember..."
  required
  className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-black resize-none"
/>
          </div>

          <button
  type="button"
onClick={async () => {
  const { error } = await supabase
    .from("survey_responses")
    .insert({
      participant_name: form.name,
      age: Number(form.age),
      gender: form.gender,
      city: form.geography,
      shopping_habit: form.shoppingHabit,
      creative_feedback: feedbackData,
      ranking: ranking,
      survey_improvement: surveyImprovement,
      memorable_creative: memorableCreative,
    });

  if (error) {
    console.error("Supabase error:", error);
    alert("Something went wrong while submitting. Please try again.");
    return;
  }

  setScreen("thankyou");
}}
  className="w-full bg-black text-white rounded-xl py-3.5 font-medium hover:bg-gray-800 transition"
>
  Submit →
</button>

        </div>
      </div>
    </main>
  );
}

// -------------------------
// THANK YOU SCREEN
// -------------------------

if (screen === "thankyou") {
  return (
    <main className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md text-center">

        <img
          src="/logo/handpickd-logo.png"
          alt="Handpickd"
          className="mx-auto w-[150px] h-auto"
        />

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mt-8">

          <div className="w-16 h-16 mx-auto rounded-full bg-black text-white flex items-center justify-center text-2xl">
            ✓
          </div>

          <h1 className="text-3xl font-semibold text-gray-900 mt-6">
            Thank You!
          </h1>

          <p className="text-gray-500 mt-3 text-sm leading-6">
            Your feedback has been recorded successfully.
            <br />
            We really appreciate your time.
          </p>
          
          <button
  type="button"
  onClick={resetSurvey}
  className="w-full bg-black text-white rounded-xl py-3.5 mt-6 font-medium hover:bg-gray-800 transition"
>
  Submit Another Response
</button>
         
        </div>

      </div>
    </main>
  );
}

  // -------------------------
  // SWIPE SCREEN
  // -------------------------

  const currentCreative = creativeOrder[currentIndex];

  return (
    <main className="min-h-screen bg-[#f8f7f4] flex flex-col items-center px-5 py-8">

      {/* Header */}
      <div className="w-full max-w-md text-center mb-5">

        <img
  src="/logo/handpickd-logo.png"
  alt="Handpickd"
  className="mx-auto w-[130px] h-auto"
/>

        <h1 className="text-2xl font-semibold mt-2">
          What catches your eye?
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Swipe right if you like it.
          <br />
          Swipe left if you don't.
        </p>

      </div>

      {/* Progress */}
      <div className="w-full max-w-md mb-4">

        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>
            Creative {currentIndex + 1}
          </span>

          <span>
            {creativeOrder.length} total
          </span>
        </div>

        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-black transition-all"
            style={{
              width: `${((currentIndex + 1) / creativeOrder.length) * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Creative Card */}
      <div className="w-full max-w-md relative">

        <div
          className="bg-white rounded-3xl shadow-lg overflow-hidden select-none touch-none"
          style={{
            transform: `translateX(${dragX}px) rotate(${dragX / 20}deg)`,
            transition: dragStart === null ? "transform 0.25s ease" : "none",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >

          <img
            src={currentCreative}
            alt={`Handpickd Creative ${currentIndex + 1}`}
            className="w-full max-h-[65vh] object-contain bg-white"
            draggable={false}
          />

        </div>

        {/* Swipe Labels */}
        {dragX > 40 && (
          <div className="absolute top-6 left-6 border-2 border-green-500 text-green-600 font-bold px-4 py-2 rounded-xl rotate-[-10deg]">
            LIKE
          </div>
        )}

        {dragX < -40 && (
          <div className="absolute top-6 right-6 border-2 border-red-500 text-red-600 font-bold px-4 py-2 rounded-xl rotate-[10deg]">
            NOPE
          </div>
        )}

      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-8 mt-6">

        <button
          onClick={() => handleSwipe("left")}
          className="w-16 h-16 rounded-full bg-white border border-red-200 text-red-500 text-2xl shadow-sm hover:scale-105 transition"
        >
          ✕
        </button>

        <button
          onClick={() => handleSwipe("right")}
          className="w-16 h-16 rounded-full bg-white border border-green-200 text-green-500 text-2xl shadow-sm hover:scale-105 transition"
        >
          ♥
        </button>

      </div>

      {/* Feedback Question */}
      {question && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-5 z-50">

          <div className="bg-white rounded-3xl p-7 w-full max-w-md">

            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
              Quick feedback
            </p>

            <h2 className="text-xl font-semibold mb-3 text-black">

              {question === "like"
                ? "What did you like about this creative?"
                : "What didn’t you like about this creative?"}

            </h2>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={
  question === "like"
    ? "Tell us what you liked..."
    : "Tell us what you didn’t like..."
}
              rows={5}
              className="w-full border border-gray-200 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-black resize-none"
              required
            />

            <button
              onClick={submitFeedback}
              disabled={!answer.trim()}
              className="w-full bg-black text-white rounded-xl py-3.5 mt-4 disabled:opacity-40"
            >
              Continue →
            </button>

          </div>

        </div>
      )}

    </main>
  );
}