import SoundButton from "./SoundButton";

import { SOUND_DATA_VARROCK } from "./data";
import { SOUND_DATA_FALADOR } from "./data";
import { SOUND_DATA_LUMBRIDGE } from "./data";
import { SOUND_DATA_EDGEVILLE } from "./data";
import { SOUND_DATA_BURTHORPE } from "./data";
import { SOUND_DATA_SKILLS } from "./data";
import { SOUND_DATA_EXTRA } from "./data";

function App() {
	return (
		<section className="container">
			<div className="p-4 pt-6 space-y-1 text-center">
				<p className="font-bold text-2xl md:text-3xl">⚔ RuneScape Kingdoms ⚔</p>
				<p className="text-lg md:text-xl">🐲 Shadow of Elvarg 🐲</p>
			</div>
			<div className=" p-4 space-y-4 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
				<div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-amber-300">
					{SOUND_DATA_VARROCK.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
				<div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-blue-300">
					{SOUND_DATA_FALADOR.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
				<div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-cyan-300">
					{SOUND_DATA_LUMBRIDGE.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
				<div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-green-900">
					{SOUND_DATA_EDGEVILLE.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
				<div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-red-300">
					{SOUND_DATA_BURTHORPE.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
				<div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-slate-400">
					{SOUND_DATA_EXTRA.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
				<div className="grid grid-cols-3 grid-rows-3 col-span-3 gap-4 p-4 rounded-lg bg-violet-300">
					{SOUND_DATA_SKILLS.map((item) => (
						<SoundButton
							key={item.name}
							name={item.name}
							tracks={item.tracks}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default App;
