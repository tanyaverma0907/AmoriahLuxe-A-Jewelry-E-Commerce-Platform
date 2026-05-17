// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

// const SignInPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Operational Authenticator Logic goes here
//     console.log("Authenticating session configuration:", formData);
//   };

//   return (
//     <div className="bg-[#f8f5f1] text-[#2a1b10] antialiased min-h-[90vh] flex items-center justify-center selection:bg-[#c58b2b]/20 px-4 sm:px-6 lg:px-8 py-12">
      
//       {/* ================= GLOBAL FORM CONTAINER WRAPPER ================= */}
//       <div className="max-w-5xl w-full bg-white rounded-[2.5rem] border border-[#e5dfd7]/60 shadow-[0_30px_70px_rgba(42,27,16,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        
//         {/* LEFT COLUMN: EDITORIAL IDENTITY BLOCK (Hidden on Small Screens) */}
//         <div className="hidden md:flex md:col-span-5 bg-[#2a1b10] text-[#f8f5f1] p-12 flex-col justify-between relative overflow-hidden">
//           {/* Decorative Backmask Pattern */}
//           <div className="absolute bottom-[-20%] right-[-10%] font-serif font-light text-[14rem] text-white/[0.02] pointer-events-none select-none">
//             A
//           </div>
          
//           <div className="space-y-1.5 relative z-10">
//             <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
//               Maison Portal
//             </span>
//             <h3 className="text-xl font-light tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
//               Amoriah Atelier
//             </h3>
//           </div>

//           <div className="space-y-4 relative z-10">
//             <p className="font-serif italic text-sm text-[#f8f5f1]/70 leading-relaxed">
//               "Access your saved structural portfolios, order tracking tracks, and personalized dynamic vault matrices."
//             </p>
//             <div className="h-[1px] w-8 bg-[#c58b2b]" />
//           </div>

//           <p className="text-[9px] uppercase tracking-[0.2em] text-[#f8f5f1]/40 relative z-10">
//             &copy; {new Date().getFullYear()} AMORIAH CORE.
//           </p>
//         </div>


//         {/* RIGHT COLUMN: INTERACTIVE INPUT SUB-SYSTEM */}
//         <div className="col-span-1 md:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          
//           {/* Section Headers */}
//           <div className="space-y-2 mb-8">
//             <span className="text-[9px] uppercase tracking-[0.3em] text-[#c58b2b] font-bold block">
//               Authentication Stage
//             </span>
//             <h2 className="text-3xl font-light tracking-tight text-[#2a1b10]" style={{ fontFamily: "'Playfair Display', serif" }}>
//               Welcome <span className="italic font-normal text-[#c58b2b]">Back</span>
//             </h2>
//             <p className="text-xs text-[#8c7b6e] font-light">
//               Enter your credentials to re-initialize your session framework.
//             </p>
//           </div>

//           {/* Form Fields Chassis */}
//           <form onSubmit={handleSubmit} className="space-y-5">
            
//             {/* INPUT FIELD A: EMAIL */}
//             <div className="space-y-1.5">
//               <label className="text-[10px] uppercase tracking-widest text-[#8c7b6e] font-semibold block">
//                 Email Address
//               </label>
//               <div className="relative border border-[#e5dfd7] bg-[#fbf9f6] rounded-xl focus-within:border-[#c58b2b] focus-within:bg-white transition-all duration-300">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7b6e]">
//                   <FiMail size={13} />
//                 </span>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="name@domain.com"
//                   className="w-full bg-transparent text-xs text-[#2a1b10] pl-11 pr-4 py-4 focus:outline-none font-light tracking-wide"
//                 />
//               </div>
//             </div>

//             {/* INPUT FIELD B: PASSWORD */}
//             <div className="space-y-1.5">
//               <div className="flex items-center justify-between">
//                 <label className="text-[10px] uppercase tracking-widest text-[#8c7b6e] font-semibold block">
//                   Password
//                 </label>
//                 <a 
//                   href="#forgot" 
//                   className="text-[10px] text-[#c58b2b] hover:text-[#2a1b10] transition-colors font-light"
//                 >
//                   Forgot Key?
//                 </a>
//               </div>
//               <div className="relative border border-[#e5dfd7] bg-[#fbf9f6] rounded-xl focus-within:border-[#c58b2b] focus-within:bg-white transition-all duration-300">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7b6e]">
//                   <FiLock size={13} />
//                 </span>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   required
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="••••••••"
//                   className="w-full bg-transparent text-xs text-[#2a1b10] pl-11 pr-12 py-4 focus:outline-none font-mono tracking-widest"
//                 />
//                 {/* Toggle Mask Input Button */}
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8c7b6e] hover:text-[#2a1b10] transition-colors p-1"
//                 >
//                   {showPassword ? <FiEyeOff size={13} /> : <FiEye size={13} />}
//                 </button>
//               </div>
//             </div>

//             {/* PIPELINE CONVERSION CALL-TO-ACTION INJECTION */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-[#2a1b10] text-[#f8f5f1] py-4 rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#c58b2b] transition-all duration-500 shadow-md hover:translate-y-[-1px]"
//               >
//                 <span>Authorize Access</span>
//                 <FiArrowRight size={12} />
//               </button>
//             </div>

//           </form>

//           {/* Subtext Account Generation Trigger Footer */}
//           <div className="mt-8 pt-6 border-t border-[#e5dfd7]/60 text-center">
//             <p className="text-xs text-[#8c7b6e] font-light">
//               New to the Atelier?{" "}
//               <a 
//                 href="#signup" 
//                 className="text-[#2a1b10] font-medium border-b border-[#2a1b10]/40 hover:border-[#2a1b10] pb-0.5 transition-all font-semibold"
//               >
//                 Create an Account
//               </a>
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default SignInPage;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook interface import kiya
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const SignInPage = () => {
  const navigate = useNavigate(); // Navigation system function instance initialization
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Operational Authenticator Logic goes here
    console.log("Authenticating session configuration:", formData);
  };

  return (
    <div className="bg-[#f8f5f1] text-[#2a1b10] antialiased min-h-[90vh] flex items-center justify-center selection:bg-[#c58b2b]/20 px-4 sm:px-6 lg:px-8 py-12">
      
      {/* ================= GLOBAL FORM CONTAINER WRAPPER ================= */}
      <div className="max-w-5xl w-full bg-white rounded-[2.5rem] border border-[#e5dfd7]/60 shadow-[0_30px_70px_rgba(42,27,16,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        
        {/* LEFT COLUMN: EDITORIAL IDENTITY BLOCK (Hidden on Small Screens) */}
        <div className="hidden md:flex md:col-span-5 bg-[#2a1b10] text-[#f8f5f1] p-12 flex-col justify-between relative overflow-hidden">
          {/* Decorative Backmask Pattern */}
          <div className="absolute bottom-[-20%] right-[-10%] font-serif font-light text-[14rem] text-white/[0.02] pointer-events-none select-none">
            A
          </div>
          
          <div className="space-y-1.5 relative z-10">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#c58b2b] font-bold block">
              Maison Portal
            </span>
            <h3 className="text-xl font-light tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Amoriah Atelier
            </h3>
          </div>

          <div className="space-y-4 relative z-10">
            <p className="font-serif italic text-sm text-[#f8f5f1]/70 leading-relaxed">
              "Access your saved structural portfolios, order tracking tracks, and personalized dynamic vault matrices."
            </p>
            <div className="h-[1px] w-8 bg-[#c58b2b]" />
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-[#f8f5f1]/40 relative z-10">
            &copy; {new Date().getFullYear()} AMORIAH CORE.
          </p>
        </div>


        {/* RIGHT COLUMN: INTERACTIVE INPUT SUB-SYSTEM */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          
          {/* Section Headers */}
          <div className="space-y-2 mb-8">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c58b2b] font-bold block">
              Authentication Stage
            </span>
            <h2 className="text-3xl font-light tracking-tight text-[#2a1b10]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Welcome <span className="italic font-normal text-[#c58b2b]">Back</span>
            </h2>
            <p className="text-xs text-[#8c7b6e] font-light">
              Enter your credentials to re-initialize your session framework.
            </p>
          </div>

          {/* Form Fields Chassis */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* INPUT FIELD A: EMAIL */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase tracking-widest text-[#8c7b6e] font-semibold block">
                Email Address
              </label>
              <div className="relative border border-[#e5dfd7] bg-[#fbf9f6] rounded-xl focus-within:border-[#c58b2b] focus-within:bg-white transition-all duration-300">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7b6e]">
                  <FiMail size={13} />
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  className="w-full bg-transparent text-xs text-[#2a1b10] pl-11 pr-4 py-4 focus:outline-none font-light tracking-wide"
                />
              </div>
            </div>

            {/* INPUT FIELD B: PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] uppercase tracking-widest text-[#8c7b6e] font-semibold block">
                  Password
                </label>
                <a 
                  href="#forgot" 
                  className="text-[10px] text-[#c58b2b] hover:text-[#2a1b10] transition-colors font-light"
                >
                  Forgot Key?
                </a>
              </div>
              <div className="relative border border-[#e5dfd7] bg-[#fbf9f6] rounded-xl focus-within:border-[#c58b2b] focus-within:bg-white transition-all duration-300">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7b6e]">
                  <FiLock size={13} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-xs text-[#2a1b10] pl-11 pr-12 py-4 focus:outline-none font-mono tracking-widest"
                />
                {/* Toggle Mask Input Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8c7b6e] hover:text-[#2a1b10] transition-colors p-1"
                >
                  {showPassword ? <FiEyeOff size={13} /> : <FiEye size={13} />}
                </button>
              </div>
            </div>

            {/* PIPELINE CONVERSION CALL-TO-ACTION INJECTION */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#2a1b10] text-[#f8f5f1] py-4 rounded-xl flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#c58b2b] transition-all duration-500 shadow-md hover:translate-y-[-1px]"
              >
                <span>Authorize Access</span>
                <FiArrowRight size={12} />
              </button>
            </div>

          </form>

          {/* Subtext Account Generation Trigger Footer */}
          <div className="mt-8 pt-6 border-t border-[#e5dfd7]/60 text-center">
            <p className="text-xs text-[#8c7b6e] font-light">
              New to the Atelier?{" "}
              {/* Programmatic Navigation setup done using button and onClick hook execution */}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-[#2a1b10] border-b border-[#2a1b10]/40 hover:border-[#2a1b10] pb-0.5 transition-all font-semibold inline-block focus:outline-none"
              >
                Create an Account
              </button>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SignInPage;