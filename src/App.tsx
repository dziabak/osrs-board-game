import SoundButton from "./SoundButton";
import StopButton from "./StopButton";

import { SOUND_DATA_VARROCK } from "./data";
import { SOUND_DATA_FALADOR } from "./data";
import { SOUND_DATA_LUMBRIDGE } from "./data";
import { SOUND_DATA_EDGEVILLE } from "./data";
import { SOUND_DATA_BURTHORPE } from "./data";
import { SOUND_DATA_SKILLS } from "./data";

function App() {
	// document.addEventListener(
	// 	"play",
	// 	function (e) {
	// 		const audios = document.getElementsByTagName("audio");

	// 		for (let i = 0, len = audios.length; i < len; i++) {
	// 			if (audios[i] != e.target) {
	// 				audios[i].pause();
	// 				audios[i].currentTime = 0;
	// 			}
	// 		}
	// 	},
	// 	true
	// );

	return (
		<div className="space-y-2">
			{/* <StopButton /> */}
			{/* <SoundButton sound={task} text="task" />
			<SoundButton sound={tutorial} text="tutorial" /> */}
			{SOUND_DATA_VARROCK.map((item) => (
				<SoundButton key={item.id} tracks={item.tracks} name={item.name} />
			))}
			{SOUND_DATA_FALADOR.map((item) => (
				<SoundButton key={item.id} tracks={item.tracks} name={item.name} />
			))}
			{SOUND_DATA_LUMBRIDGE.map((item) => (
				<SoundButton key={item.id} tracks={item.tracks} name={item.name} />
			))}
			{SOUND_DATA_EDGEVILLE.map((item) => (
				<SoundButton key={item.id} tracks={item.tracks} name={item.name} />
			))}
			{SOUND_DATA_BURTHORPE.map((item) => (
				<SoundButton key={item.id} tracks={item.tracks} name={item.name} />
			))}
			{SOUND_DATA_SKILLS.map((item) => (
				<SoundButton key={item.id} tracks={item.tracks} name={item.name} />
			))}
		</div>
	);
}

export default App;
