import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Facebook, Apple } from 'lucide-react';
import { FcGoogle as Google } from 'react-icons/fc';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent.');
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  const handleSocialLogin = async (provider: any) => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Error during social login:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
          <form onSubmit={handleAuth} className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
            )}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border-gray-300 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Your password"
              required
            />
          </div>
          {!isSignUp && (
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500"
              >
                Forgot Password?
              </button>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500"
          >
            {isSignUp ? 'Already have an account ? Sign In' : "Don't have an account ? Sign Up"}
          </button>
        </div>
        <div className="mt-6">
          <div className="text-center text-gray-600 dark:text-gray-300 mb-4">Or sign in with</div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handleSocialLogin(new GoogleAuthProvider())}
              className="p-2 rounded-full bg-red-100 text-white hover:bg-red-400 transition-colors"
            >
              <Google className="h-6 w-6" />
            </button>
            <button
              onClick={() => handleSocialLogin(new FacebookAuthProvider())}
              className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-500 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </button>
            <button
              onClick={() => alert('Apple login is not implemented yet.')}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-500 transition-colors"
            >
              <Apple className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;