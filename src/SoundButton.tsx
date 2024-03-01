import { useRef, useEffect } from "react";
import { useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface Music {
	name: string;
	url: string;
}

const SoundButton = ({ name, tracks }: { name: string; tracks: Music[] }) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [active, setActive] = useState(false); // Track if the button is active (clicked) or not
	const [selectedMusic, setSelectedMusic] = useState<Music | null>(null);

	const selectRandomMusic = () => {
		const randomIndex = Math.floor(Math.random() * tracks.length);
		setSelectedMusic(tracks[randomIndex]);
	};

	useEffect(() => {
		selectRandomMusic();
	}, []); // Call selectRandomMusic when the component mounts

	const handleButtonClick = () => {
		setActive(!active); // Toggle active state

		// Generate a new song immediately regardless of the current state
		selectRandomMusic();

		if (active && selectedMusic) {
			// If button was active, play the new song
			audioRef.current?.play();
		} else {
			// If button was inactive, pause and reset the current song
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		}
	};

	useEffect(() => {
		if (active && selectedMusic) {
			audioRef.current?.play();
			console.log(selectedMusic?.name);
		} else {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		}
	}, [active, selectedMusic]);

	useEffect(() => {
		if (!active && audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
	}, [active]);

	useOnClickOutside(buttonRef, () => {
		setActive(false); // Reset active state when clicking outside the button
	});

	return (
		<>
			<div>
				<button
					ref={buttonRef}
					onClick={handleButtonClick}
					className={`w-full h-full px-1 py-2 border border-black rounded-md text-lg hover:bg-slate-200 transition-colors ${
						active ? "bg-slate-100" : "bg-white"
					}`}>
					{name}
				</button>
				{selectedMusic && (
					<audio
						ref={audioRef}
						src={selectedMusic.url}
						onEnded={handleButtonClick}
					/>
				)}
			</div>
		</>
	);
};

export default SoundButton;
