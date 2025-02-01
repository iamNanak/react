import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Container from "../container/Container";

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gray-900 text-gray-400 border-t border-gray-700">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo width="100px" />
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Legals
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-gray-300 hover:text-white transition"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
