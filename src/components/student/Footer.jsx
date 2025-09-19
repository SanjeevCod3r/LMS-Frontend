import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

import SocialIcons from "../SocialIcons";

const Footer = () => {
	// Added subscription state
	const [subscribeEmail, setSubscribeEmail] = useState("");
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isMobile, setIsMobile] = useState(false);

	// Mobile detection
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Mouse tracking for interactive effects
	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		if (!isMobile) {
			window.addEventListener('mousemove', handleMouseMove);
			return () => window.removeEventListener('mousemove', handleMouseMove);
		}
	}, [isMobile]);

	// Added subscription handler
	const handleSubscribe = () => {
		// Replace this with your subscription API integration if needed
		console.log("Subscribed with:", subscribeEmail);
		alert(`Subscribed with: ${subscribeEmail}`);
		setSubscribeEmail("");
	};

	return (
		<footer className="relative bg-black text-left w-full overflow-hidden">
			{/* Simple Black Background with Subtle Effects */}
			<div className="absolute inset-0">
				{/* Subtle corner glows only */}
				<div className="absolute top-10 left-10 w-32 h-32 bg-white/3 rounded-full blur-xl" />
				<div className="absolute bottom-10 right-10 w-24 h-24 bg-white/2 rounded-full blur-xl" />
			</div>

			<div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-20 pt-12">
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-white/20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{/* Brand Section */}
					<motion.div 
						className="space-y-4"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-3">
							<img 
								src={assets.Logo1} 
								alt="logo" 
								className="w-10 h-10"
							/>
							<span className="text-xl font-bold text-white">
								Hey.Naimish
							</span>
						</div>
						<p className="text-white/70 text-sm leading-relaxed">
							Quality education made accessible for everyone.
						</p>
						<SocialIcons />
					</motion.div>

					{/* Quick Links */}
					<motion.div 
						className="space-y-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-bold text-white">Quick Links</h3>
						<ul className="space-y-2">
							{[
								{ name: "Home", path: "/" },
								{ name: "About", path: "/about" },
								{ name: "Contact", path: "/contact" },
								{ name: "Privacy", path: "" }
							].map((link, index) => (
								<li key={index}>
									<Link 
										to={link.path}
										className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Newsletter */}
					<motion.div 
						className="space-y-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<h3 className="text-lg font-bold text-white">Newsletter</h3>
						<p className="text-white/70 text-sm">
							Get updates delivered to your inbox.
						</p>
						<div className="space-y-2">
							<input
								type="email"
								placeholder="Your email"
								className="w-full bg-white/10 border border-white/30 text-white placeholder-white/60 outline-none rounded-lg px-3 py-2 text-sm focus:border-white transition-all duration-300"
								value={subscribeEmail}
								onChange={(e) => setSubscribeEmail(e.target.value)}
							/>
							<button
								onClick={handleSubscribe}
								className="w-full bg-white text-black font-semibold rounded-lg py-2 text-sm hover:bg-gray-100 transition-all duration-300"
							>
								Subscribe
							</button>
						</div>
					</motion.div>
				</motion.div>

				{/* Bottom Section */}
				<div className="py-4 text-center border-t border-white/10">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-2">
						<p className="text-white/60 text-xs">
							© 2025 <span className="text-white/80 font-semibold">Hey.Naimish</span>. All Rights Reserved.
						</p>
						<div className="flex items-center gap-4 text-white/60 text-xs">
							<Link to="" className="hover:text-white transition-colors duration-300">Terms</Link>
							<Link to="" className="hover:text-white transition-colors duration-300">Privacy</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
