import React, {useEffect} from 'react'
import img from '/src/assets/25586516_3641.jpg'
import animated from '/src/assets/6614.jpg'
import bgSong from '/src/assets/RomjanerOiRojarSheshe.mp3'
import { useParams } from 'react-router';

function EidGreetings() {

	const {dynamicSegment} = useParams();

	useEffect(()=>{
		document.querySelector('audio').volume = 0.1;
	}, [])

	useEffect(()=>{
		document.querySelector('audio').muted = true;
		document.querySelector('audio').play;
	},[])

	const handleClick=(e)=> {
		e.target.style.display="none";
		let msg = document.querySelector('.msg');
		msg.style.display = "flex";

		document.querySelector('audio').muted = false;
	}

	return (
		<div>
			<div className="py-3 md:py-6 px-3 bg-emerald-800 text-white text-sm md:text-lg relative md:text-center"><span className="ml-3">After a month of long fastings</span><br/><span className="ml-3">Eid has been reached to us at the end!</span>
				<div className="animatedDiv absolute w-[25px] h-[100%] bg-emerald-800/50 left-0 top-0"></div>
			</div><div className="h-1">
			</div>
			<img className="md:w-[60%] mx-auto" src={img} alt="eid image"/>

			<div className="clickBar w-[90%] h-[2rem] bg-red-800 mx-auto flex justify-center items-center rounded-[20px] text-red-300 cursor-pointer hover:text-white" onClick={handleClick}>Tap to see your message</div>

			<div style={{display: "none"}} className="msg mx-3 md:mx-14 px-1 text-sm md:text-lg text-emerald-700 relative">
			<p><strong>প্রিয় {dynamicSegment}</strong><br/><br/>দীর্ঘ এক মাস সিয়াম সাধনার পর এলো পবিত্র ঈদুল ফিতর। এই ঈদুল ফিতর এর আনন্দ এবং মহান রাব্বুল আলামিনের রহমত তোমার তোমার জীবনে চিরস্থায়ী হোক। আল্লাহ তোমার সকল ভালো কাজ এবং নেক নিয়তসমূহকে কবুল করুক। ঈদে তোমার জন্য অসংখ্য শুভকামনা। সেই সাথে বন্ধুবান্ধব, আত্মীয় স্বজন, শিক্ষক, পাড়া প্রতিবেশী, সকল মরহুম পিতামাতা ও ফিলিস্তিনের মানুষের জন্য রইল তোমার দোয়ার দরখাস্ত।<br/><br/><strong>ঈদ মোবারক!</strong></p>
			<div className="anotherAnimation absolute h-[100%] w-6 bg-white/50"></div>
			</div>

			<div><img className="animated md:w-[60%] md:mx-auto" src={animated} alt="animated image"/></div>
			<audio style={{display: "none"}} controls autoPlay loop>
				<source src={bgSong} type="audio/mpeg"/>
			</audio>
			<div className="mt-4 pb-3 flex items-center justify-center mx-auto text-xs text-emerald-700 font-bold md:text-lg">Eidul-Fitr 2025</div>
		</div>
	)
}

export default EidGreetings