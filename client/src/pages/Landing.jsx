import React from 'react';

const Landing = () => {
  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-20 py-6 bg-zinc-950/95 backdrop-blur-lg border-b border-purple-500/10 animate-slide-down">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-display font-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            EventFlow
          </div>
          
          <div className="hidden md:flex gap-10 items-center">
            <a href="#features" className="text-zinc-300 hover:text-fuchsia-400 transition-colors font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-zinc-300 hover:text-fuchsia-400 transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="text-zinc-300 hover:text-fuchsia-400 transition-colors font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-zinc-300 hover:text-fuchsia-400 transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full font-semibold border-2 border-purple-500 text-zinc-100 hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/40 transition-all">
              Login
            </button>
            <button className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-fuchsia-500/40 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-950/40 via-zinc-950 to-zinc-950 animate-pulse-glow"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Hero Text */}
          <div className="animate-fade-in-left">
            <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-6">
              Plan Your Perfect Event with{' '}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                EventFlow
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Transform your vision into reality with our all-in-one event planning platform. From intimate gatherings to grand celebrations, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all relative overflow-hidden">
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="px-8 py-4 text-lg font-bold rounded-full border-2 border-purple-500 text-zinc-100 hover:bg-purple-500/10 hover:-translate-y-1 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Event Cards Visual */}
          <div className="relative h-[500px] hidden lg:block animate-fade-in-right">
            {/* Card 1 */}
            <div className="absolute top-0 left-0 w-72 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-md border border-purple-400/30 hover:border-pink-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer animate-float-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-3xl mb-4">
                🎉
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Birthday Party</h3>
              <p className="text-zinc-400">150 guests · March 15</p>
            </div>

            {/* Card 2 */}
            <div className="absolute top-32 right-0 w-72 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-md border border-purple-400/30 hover:border-pink-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer animate-float-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-3xl mb-4">
                💼
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Corporate Event</h3>
              <p className="text-zinc-400">500 guests · April 22</p>
            </div>

            {/* Card 3 */}
            <div className="absolute bottom-0 left-12 w-72 p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 backdrop-blur-md border border-purple-400/30 hover:border-pink-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer animate-float-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-3xl mb-4">
                💒
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Wedding</h3>
              <p className="text-zinc-400">200 guests · June 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-20 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-display font-black text-center mb-16">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              EventFlow
            </span>?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 border border-purple-400/20 hover:border-pink-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all opacity-0 animate-fade-in-up animation-delay-100">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-display font-bold mb-3">Smart Planning</h3>
              <p className="text-zinc-400 leading-relaxed">
                Intuitive timeline management and task scheduling to keep your event on track from start to finish.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 border border-purple-400/20 hover:border-pink-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all opacity-0 animate-fade-in-up animation-delay-200">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-display font-bold mb-3">Guest Management</h3>
              <p className="text-zinc-400 leading-relaxed">
                Effortlessly manage invitations, RSVPs, and guest lists all in one centralized platform.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 border border-purple-400/20 hover:border-pink-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all opacity-0 animate-fade-in-up animation-delay-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-display font-bold mb-3">Budget Tracking</h3>
              <p className="text-zinc-400 leading-relaxed">
                Stay within budget with real-time expense tracking and detailed financial reports.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 border border-purple-400/20 hover:border-pink-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all opacity-0 animate-fade-in-up animation-delay-400">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-display font-bold mb-3">Vendor Network</h3>
              <p className="text-zinc-400 leading-relaxed">
                Connect with trusted vendors and service providers for all your event needs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 border border-purple-400/20 hover:border-pink-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all opacity-0 animate-fade-in-up animation-delay-500">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-display font-bold mb-3">Mobile Access</h3>
              <p className="text-zinc-400 leading-relaxed">
                Plan on the go with our mobile-friendly platform accessible from any device.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 border border-purple-400/20 hover:border-pink-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all opacity-0 animate-fade-in-up animation-delay-600">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-display font-bold mb-3">Custom Templates</h3>
              <p className="text-zinc-400 leading-relaxed">
                Choose from beautiful pre-designed templates or create your own unique event style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-pink-500/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-display font-black mb-6">
            Ready to Create Your{' '}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Dream Event
            </span>?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Join thousands of event planners who trust EventFlow to bring their visions to life.
          </p>
          <button className="px-12 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all">
            Start Planning Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;