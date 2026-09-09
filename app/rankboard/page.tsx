"use client"

import dynamic from "next/dynamic"

const RankBoardContent = dynamic(() => import("../components/RankBoardContent"), {
  ssr: false,
})

export default function RankBoardPage() {
  return <RankBoardContent />
}