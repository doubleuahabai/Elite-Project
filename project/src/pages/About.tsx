import { Users, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <main>
      <section className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elite</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We're revolutionizing how professionals connect, making career growth and talent acquisition seamless and efficient.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To create meaningful connections between talent and opportunity, fostering professional growth and success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's most trusted platform for professional connections and career development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Trust, innovation, and inclusivity guide everything we do to serve our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Elite was founded with a simple yet powerful idea: to create a platform that brings together all aspects of professional networking and career development under one roof.
            </p>
            <p className="text-gray-600 mb-6">
              We recognized the fragmentation in the job market, where different platforms served different needs. Job seekers, recruiters, freelancers, and tradespeople all had their separate spaces, making it difficult to create meaningful connections across these boundaries.
            </p>
            <p className="text-gray-600">
              Today, we're building the future of professional networking, where opportunities know no boundaries and success is accessible to all.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Join Us in Shaping the Future</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're always looking for passionate individuals and organizations to join our growing community.
            </p>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}