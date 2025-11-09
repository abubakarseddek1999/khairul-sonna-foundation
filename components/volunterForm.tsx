"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from "lucide-react"

interface EducationLevel {
  id: string
  level: string
  subject: string
  marks: string
  division: string
}

export function VolunterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    age: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    presentAddress: "",
  })

  const [education, setEducation] = useState<EducationLevel[]>([
    { id: "secondary", level: "মাধ্যমিক পরীক্ষা", subject: "", marks: "", division: "" },
    { id: "higher", level: "উচ্চ মাধ্যমিক", subject: "", marks: "", division: "" },
    { id: "bachelor", level: "স্নাতক পরীক্ষা", subject: "", marks: "", division: "" },
    { id: "master", level: "মাস্টার পরীক্ষা", subject: "", marks: "", division: "" },
  ])

  const [skills, setSkills] = useState({
    deskSkills: "",
    workingArea: "",
    references: "",
    checkedReferences: false,
    additionalSkills: "",
  })

  const [additionalInfo, setAdditionalInfo] = useState({
    ngoExperience: false,
    trainingExperience: false,
    organizationName: "",
    designatedSkill: "",
    referenceSkill: "",
    preferredLanguage: "",
    preferredDuration: "",
    presentationSkills: "",
    additionalInfo: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: val }))
  }

  const handleEducationChange = (id: string, field: string, value: string) => {
    setEducation((prev) => prev.map((e) => (e.id === id ? { ...e, [field]: value } : e)))
  }

  const handleSkillsChange = (field: string, value: string | boolean) => {
    setSkills((prev) => ({ ...prev, [field]: value }))
  }

  const handleAdditionalChange = (field: string, value: string | boolean) => {
    setAdditionalInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setProfilePhoto(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.mobileNumber || !formData.email) {
      alert("দয়া করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন")
      return
    }
    console.log("Form Data:", { formData, education, skills, additionalInfo, profilePhoto })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const subjects = ["বিজ্ঞান", "মানবিক", "বাণিজ্য", "অন্যান্য"]
  const divisions = ["প্রথম বিভাগ", "দ্বিতীয় বিভাগ", "তৃতীয় বিভাগ", "পাস"]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Green Header */}
        <div className="bg-green-600 text-white rounded-t-lg p-8 mb-0">
          <h2 className="text-2xl font-bold mb-2">স্বেচ্ছাসেবক আবেদন</h2>
          <p className="text-green-100 text-sm leading-relaxed">
            দয়া করে সব তথ্য সঠিকভাবে পূরণ করুন। আপনার প্রদত্ত তথ্য সম্পূর্ণ গোপনীয় থাকবে এবং শুধুমাত্র আমাদের স্বেচ্ছাসেবক কর্মসূচির জন্য ব্যবহৃত
            হবে।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg shadow-lg p-8">
          {/* Personal Information */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">সম্পূর্ণ নাম</label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="নাম"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">নিবন্ধন নম্বর *</label>
                <Input type="text" placeholder="নিবন্ধন নম্বর" className="border-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">●</span>
                  মোবাইল নম্বর
                </label>
                <Input
                  type="tel"
                  name="mobileNumber"
                  placeholder="মোবাইল নম্বর"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল *</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="ইমেইল"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">জেন্ডার</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="male">পুরুষ</option>
                  <option value="female">মহিলা</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">জন্মতারিখ</label>
                <Input type="date" className="border-gray-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">বর্তমান ঠিকানা</label>
                <Input
                  type="text"
                  name="presentAddress"
                  placeholder="ঠিকানা"
                  value={formData.presentAddress}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">স্থায়ী ঠিকানা</label>
                <Input
                  type="text"
                  name="permanentAddress"
                  placeholder="ঠিকানা"
                  value={formData.permanentAddress}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
              </div>
            </div>
          </div>

          <hr className="mb-8" />

          {/* Educational Qualifications */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">শিক্ষাগত যোগ্যতা</h3>

            {education.map((edu) => (
              <div key={edu.id} className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">{edu.level}</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">বিষয় *</label>
                    <select
                      value={edu.subject}
                      onChange={(e) => handleEducationChange(edu.id, "subject", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
                    >
                      <option value="">নির্বাচন করুন</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">নম্বর *</label>
                    <Input
                      placeholder="নম্বর"
                      value={edu.marks}
                      onChange={(e) => handleEducationChange(edu.id, "marks", e.target.value)}
                      className="border-gray-300 bg-gray-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">পয়েন্ট/শতাংশ *</label>
                    <Input placeholder="পয়েন্ট/শতাংশ" className="border-gray-300 bg-gray-100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">বিভাগ *</label>
                    <select
                      value={edu.division}
                      onChange={(e) => handleEducationChange(edu.id, "division", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
                    >
                      <option value="">নির্বাচন করুন</option>
                      {divisions.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="mb-8" />

          {/* Skills and Preferences */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">দক্ষতা এবং পছন্দ</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ডেস্ক স্কিল</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="typing">টাইপিং</option>
                  <option value="data-entry">ডেটা এন্ট্রি</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">কর্মক্ষেত্র *</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="education">শিক্ষা</option>
                  <option value="health">স্বাস্থ্য</option>
                  <option value="welfare">কল্যাণ</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">উল্লেখযোগ্য প্রশিক্ষণ এবং অভিজ্ঞতা *</label>
              <Input
                placeholder="প্রশিক্ষণ এবং অভিজ্ঞতা"
                value={skills.references}
                onChange={(e) => handleSkillsChange("references", e.target.value)}
                className="border-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="ngoExp"
                  checked={additionalInfo.ngoExperience}
                  onChange={(e) => handleAdditionalChange("ngoExperience", e.target.checked)}
                  className="w-4 h-4 mt-1 text-green-600 rounded border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                <label htmlFor="ngoExp" className="text-sm text-gray-700">
                  এনজিও/এনপিও এর সাথে অভিজ্ঞতা আছে
                </label>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="trainingExp"
                  checked={additionalInfo.trainingExperience}
                  onChange={(e) => handleAdditionalChange("trainingExperience", e.target.checked)}
                  className="w-4 h-4 mt-1 text-green-600 rounded border-gray-300 focus:ring-2 focus:ring-green-600"
                />
                <label htmlFor="trainingExp" className="text-sm text-gray-700">
                  প্রশিক্ষণ প্রোগ্রামে অংশগ্রহণ করেছেন
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">●</span>
                  অভিজ্ঞতার ক্ষেত্র
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="field">ফিল্ড</option>
                  <option value="office">অফিস</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500">●</span>
                  কর্মক্ষমতা দক্ষতা
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="excellent">চমৎকার</option>
                  <option value="good">ভাল</option>
                  <option value="average">গড়</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="mb-8" />

          {/* Additional Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">অতিরিক্ত তথ্য</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">সংস্থার নাম</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="org1">সংস্থা ১</option>
                  <option value="org2">সংস্থা ২</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">পদবি *</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="coordinator">সমন্বয়ক</option>
                  <option value="officer">অফিসার</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">পছন্দের ভাষা *</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="bengali">বাংলা</option>
                  <option value="english">ইংরেজি</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">পছন্দের কর্মসময় *</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">নির্বাচন করুন</option>
                  <option value="fulltime">পূর্ণকালীন</option>
                  <option value="parttime">খন্ডকালীন</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">উপস্থাপনা দক্ষতা *</label>
              <Input placeholder="দক্ষতা বর্ণনা করুন" className="border-gray-300" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">অতিরিক্ত মন্তব্য</label>
              <textarea
                placeholder="অতিরিক্ত তথ্য"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                rows={3}
              />
            </div>
          </div>

          <hr className="mb-8" />

          {/* Profile Photo */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">আপনার ছবি</label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm font-medium">আপনার ছবি</span>
                  <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                </label>
                {profilePhoto && <p className="text-sm text-gray-600 mt-2">{profilePhoto.name}</p>}
              </div>
            </div>
          </div>

          <hr className="mb-8" />

          {/* Important Notice */}
          <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-900 text-sm leading-relaxed">
              <strong className="text-red-600">* গুরুত্বপূর্ণ বিষয়ের নোট:</strong> আমরা প্রতিশ্রুতিবদ্ধ যে আপনার ব্যক্তিগত তথ্য
              সম্পূর্ণভাবে গোপনীয় থাকবে এবং শুধুমাত্র স্বেচ্ছাসেবক নিয়োগের জন্য ব্যবহৃত হবে।
            </p>
          </div>

          {/* Checkboxes */}
          <div className="mb-8 space-y-3">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 text-green-600 rounded border-gray-300 focus:ring-2 focus:ring-green-600"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                আমি সমস্ত শর্তাবলী এবং গোপনীয়তা নীতি সম্মত করছি *
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                className="w-4 h-4 mt-1 text-green-600 rounded border-gray-300 focus:ring-2 focus:ring-green-600"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                আমি সংস্থার সংবাদপত্র পেতে এবং সংস্থার কাজ সম্পর্কে জানতে আগ্রহী
              </label>
            </div>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                ✓ আপনার আবেদন সফলভাবে জমা দেওয়া হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-base"
          >
            আবেদন করুন →
          </Button>
        </form>
      </div>
    </div>
  )
}
