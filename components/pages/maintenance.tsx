"use client";
import type React from "react";
import { useCallback, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Clock,
  Mail,
  Twitter,
  Github,
  Globe,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useCountdown } from "@/hooks";

export default function MaintenancePage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const timeLeft = useCountdown();

  const getTimeFormat = useCallback(
    (key: keyof typeof timeLeft) => {
      return timeLeft[key]?.toString()?.padStart(2, "0");
    },
    [timeLeft]
  );

  const handleEmailSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email?.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* Logo/Brand Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {process.env.NEXT_PUBLIC_MAINTENANCE_TITLE}
            </h1>
          </div>

          {/* Maintenance Image Placeholder */}
          <div className="relative mx-auto max-w-md">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-12 h-12 text-blue-600" />
                </div>
                <p className="text-sm text-gray-500 px-4">
                  {process.env.NEXT_PUBLIC_MAINTENANCE_DESCRIPTION}
                  <br />
                  <span className="text-xs">
                    {process.env.NEXT_PUBLIC_MAINTENANCE_SUBTITLE}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl text-gray-600 leading-relaxed">
              {process.env.NEXT_PUBLIC_MAINTENANCE_DESCRIPTION}
            </p>
            <p className="text-gray-500">
              {process.env.NEXT_PUBLIC_MAINTENANCE_BUTTON_TEXT}
            </p>
          </div>

          {/* Countdown Timer */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {process.env.NEXT_PUBLIC_MAINTENANCE_TITLE}
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 bg-blue-50 rounded-lg py-3">
                    {getTimeFormat("days")}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">Days</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 bg-blue-50 rounded-lg py-3">
                    {getTimeFormat("hours")}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">Hours</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 bg-blue-50 rounded-lg py-3">
                    {getTimeFormat("minutes")}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Minutes
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 bg-blue-50 rounded-lg py-3">
                    {getTimeFormat("seconds")}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Seconds
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Notification Signup */}
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get Notified
              </h3>

              {!isSubscribed ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Notify Me When We're Back
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                  <p className="text-green-600 font-medium">
                    Thanks! We'll notify you when we're back online.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Status Updates */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {process.env.NEXT_PUBLIC_MAINTENANCE_TITLE}
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  {process.env.NEXT_PUBLIC_MAINTENANCE_DESCRIPTION}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700">
                  {process.env.NEXT_PUBLIC_MAINTENANCE_DESCRIPTION}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-700">
                  {process.env.NEXT_PUBLIC_MAINTENANCE_DESCRIPTION}
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Social Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button variant="outline" asChild>
                <Link href="mailto:support@yoursite.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/status" target="_blank">
                  <Globe className="w-4 h-4 mr-2" />
                  Status Page
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
