import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Hero from "./components/home_page/hero";
import Navbar from "./components/home_page/navbar";
import { SparklesCore } from "./components/home_page/sparkles";
import Game from "./game.jsx";
import About from "./components/home_page/About.jsx";
import QuizBattle from "./components/game_page/QuizBattle.jsx";
import Leaderboard from "./components/game_page/leaderboard.jsx";
import DailyChallenges from "./components/game_page/DailyChallenges.jsx";
import NotFound from "./components/404/404.jsx";
import UnderConstruction from "../src/components/404/UnderConstruction.jsx";
import Classroom from "./Classroom.jsx";
import SubjectList from ".//components/Notes/SubjectList.jsx";
import TopicList from "./components/Notes/TopicList.jsx";
import TopicResource from "./components/Notes/TopicResource.jsx";
import Auth from "./components/home_page/Auth.jsx";
import Chatbot from "./Chatbot.jsx";


export default function App() {
  const location = useLocation(); // Get the current route

  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* Ambient background with moving particles */}
        <div className="h-full w-full absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10">
          {/* Show Navbar only if NOT on 404 page */}
          {location.pathname !== "/404" && <Navbar />}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz-battle" element={<QuizBattle />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/daily-challenges" element={<DailyChallenges />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/Subjectlist" element={<SubjectList />} />
            <Route path="/topics/:subject" element={<TopicList />} />
            <Route path="/resources/:subject/:topic" element={<TopicResource />} />
            <Route path="/login" element={<Auth isLogin={true} />} />
            <Route path="/signup" element={<Auth isLogin={false} />} />

            
            {/* Catch all other routes and redirect to 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/under-construction" element={<UnderConstruction />} /> 
          </Routes>
        </div>
      </main>
    </>
  );
}
