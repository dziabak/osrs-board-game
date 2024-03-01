const StopButton = () => {
	const stopAllAudio = () => {
		const audios = document.getElementsByTagName("audio");

		for (let i = 0, len = audios.length; i < len; i++) {
			audios[i].pause();
			audios[i].currentTime = 0;
		}
	};

	return <button onClick={stopAllAudio}>Stop All Audio</button>;
};

export default StopButton;
