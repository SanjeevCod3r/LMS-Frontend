import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

import SocialIcons from "../SocialIcons";

const Footer = () => {
	// Added subscription state
	const [subscribeEmail, setSubscribeEmail] = useState("");

	// Added subscription handler
	const handleSubscribe = () => {
		// Replace this with your subscription API integration if needed
		console.log("Subscribed with:", subscribeEmail);
		alert(`Subscribed with: ${subscribeEmail}`);
		setSubscribeEmail("");
	};

	return (
		<footer className="relative bg-black text-left w-full overflow-hidden">
			{/* Subtle background elements for black section */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
				<div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
				<div className="absolute bottom-10 right-10 w-24 h-24 bg-white/3 rounded-full blur-xl" />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/2 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-36 pt-20">
				<motion.div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 border-b border-white/20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{/* Brand Section */}
					<motion.div 
						className="lg:col-span-2 space-y-6"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-3">
							<motion.img 
								src={assets.Logo1} 
								alt="logo" 
								className="w-12 h-12"
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ type: "spring", stiffness: 300 }}
							/>
							<span className="text-2xl lg:text-3xl font-bold text-white">
								Hey.Naimish
							</span>
						</div>
						<p className="text-white/80 leading-relaxed max-w-md">
							Hey.Naimish makes education accessible and engaging, connecting students with educators through quality courses, interactive tools, and intuitive design.
						</p>
						<div className="pt-4">
							<SocialIcons />
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div 
						className="space-y-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
						<ul className="space-y-3">
							{[
								{ name: "Home", path: "/" },
								{ name: "About us", path: "/about" },
								{ name: "Contact us", path: "/contact" },
								{ name: "Privacy policy", path: "" }
							].map((link, index) => (
								<motion.li 
									key={index}
									whileHover={{ x: 5 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									<Link 
										to={link.path}
										className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
									>
										<span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
										{link.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Newsletter */}
					<motion.div 
						className="space-y-6"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-bold text-white mb-6">Stay Updated</h3>
						<p className="text-white/70 text-sm leading-relaxed">
							Get the latest news, articles, and resources delivered to your inbox weekly.
						</p>
						<div className="space-y-3">
							<motion.input
								type="email"
								placeholder="Enter your email"
								className="w-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 outline-none rounded-xl px-4 py-3 text-sm focus:border-white focus:bg-white/20 transition-all duration-300"
								value={subscribeEmail}
								onChange={(e) => setSubscribeEmail(e.target.value)}
								whileFocus={{ scale: 1.02 }}
							/>
							<motion.button
								onClick={handleSubscribe}
								className="w-full btn-white font-semibold rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Subscribe ✨
							</motion.button>
						</div>
					</motion.div>
				</motion.div>

				{/* Bottom Section */}
				<motion.div 
					className="py-6 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<p className="text-white/60 text-sm">
							Copyright 2025 © <span className="text-white/80 font-semibold">Hey.Naimish</span> by GPS. All Rights Reserved.
						</p>
						<div className="flex items-center gap-6 text-white/60 text-sm">
							<Link to="" className="hover:text-white transition-colors duration-300">Terms</Link>
							<Link to="" className="hover:text-white transition-colors duration-300">Privacy</Link>
							<Link to="" className="hover:text-white transition-colors duration-300">Cookies</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
