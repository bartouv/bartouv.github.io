#!/bin/bash

# Script to add new themes (p11-p15) to all article pages

cd "$(dirname "$0")/articles"

for file in *.html; do
  # Add new themes to JavaScript object (before closing brace)
  sed -i '' '/p10: {.*}/a\
  ,\
  p11: { '\''--bg'\'':'\''#0e1e28'\'','\''--bg2'\'':'\''#121e2e'\'','\''--bg3'\'':'\''#162634'\'','\''--panel'\'':'\''#1a2e3c'\'','\''--border'\'':'\''rgba(80,230,240,0.22)'\'','\''--accent'\'':'\''#50e6f6'\'','\''--accent2'\'':'\''#ff6b9d'\'','\''--accent3'\'':'\''#80f0ff'\'','\''--text'\'':'\''#e8f8ff'\'','\''--muted'\'':'\''#88b0c8'\'','\''--dim'\'':'\''#283840'\'','\''--glow1'\'':'\''rgba(80,230,246,0.1)'\'','\''--glow2'\'':'\''rgba(255,107,157,0.08)'\'','\''--grid'\'':'\''rgba(80,180,200,0.04)'\'' },\
  p12: { '\''--bg'\'':'\''#1a1208'\'','\''--bg2'\'':'\''#221810'\'','\''--bg3'\'':'\''#2a1e18'\'','\''--panel'\'':'\''#342420'\'','\''--border'\'':'\''rgba(255,140,80,0.22)'\'','\''--accent'\'':'\''#ff8c50'\'','\''--accent2'\'':'\''#20e8c0'\'','\''--accent3'\'':'\''#ffb080'\'','\''--text'\'':'\''#fff0e8'\'','\''--muted'\'':'\''#c8a888'\'','\''--dim'\'':'\''#403028'\'','\''--glow1'\'':'\''rgba(255,140,80,0.08)'\'','\''--glow2'\'':'\''rgba(32,232,192,0.08)'\'','\''--grid'\'':'\''rgba(200,120,80,0.04)'\'' },\
  p13: { '\''--bg'\'':'\''#081a12'\'','\''--bg2'\'':'\''#0e2218'\'','\''--bg3'\'':'\''#142a1e'\'','\''--panel'\'':'\''#1a3224'\'','\''--border'\'':'\''rgba(80,240,160,0.22)'\'','\''--accent'\'':'\''#50f0a0'\'','\''--accent2'\'':'\''#ff4080'\'','\''--accent3'\'':'\''#80ffc0'\'','\''--text'\'':'\''#e8fff0'\'','\''--muted'\'':'\''#88c8a0'\'','\''--dim'\'':'\''#283830'\'','\''--glow1'\'':'\''rgba(80,240,160,0.08)'\'','\''--glow2'\'':'\''rgba(255,64,128,0.08)'\'','\''--grid'\'':'\''rgba(80,200,140,0.04)'\'' },\
  p14: { '\''--bg'\'':'\''#181a0e'\'','\''--bg2'\'':'\''#1e2214'\'','\''--bg3'\'':'\''#242a1a'\'','\''--panel'\'':'\''#2a3220'\'','\''--border'\'':'\''rgba(200,255,100,0.22)'\'','\''--accent'\'':'\''#c8ff64'\'','\''--accent2'\'':'\''#6040ff'\'','\''--accent3'\'':'\''#e0ff90'\'','\''--text'\'':'\''#f0ffe8'\'','\''--muted'\'':'\''#a8c888'\'','\''--dim'\'':'\''#383828'\'','\''--glow1'\'':'\''rgba(200,255,100,0.08)'\'','\''--glow2'\'':'\''rgba(96,64,255,0.08)'\'','\''--grid'\'':'\''rgba(160,200,80,0.04)'\'' },\
  p15: { '\''--bg'\'':'\''#28120e'\'','\''--bg2'\'':'\''#321812'\'','\''--bg3'\'':'\''#3c1e18'\'','\''--panel'\'':'\''#462420'\'','\''--border'\'':'\''rgba(255,120,100,0.22)'\'','\''--accent'\'':'\''#ff7864'\'','\''--accent2'\'':'\''#00d4e0'\'','\''--accent3'\'':'\''#ffa080'\'','\''--text'\'':'\''#ffe8e8'\'','\''--muted'\'':'\''#c89088'\'','\''--dim'\'':'\''#402828'\'','\''--glow1'\'':'\''rgba(255,120,100,0.08)'\'','\''--glow2'\'':'\''rgba(0,212,224,0.08)'\'','\''--grid'\'':'\''rgba(200,100,90,0.04)'\'' }
' "$file"

  # Add theme buttons to HTML (before closing </div> of theme panel)
  sed -i '' '/<span>Gold & Violet<\/span>/a\
      </button>\
      <button class="theme-option" data-theme="p11" onclick="setTheme('\''p11'\'')">\
        <span class="theme-swatch" style="background:linear-gradient(135deg,#50e6f6,#ff6b9d)"></span>\
        <span>Cyan & Rose</span>\
      </button>\
      <button class="theme-option" data-theme="p12" onclick="setTheme('\''p12'\'')">\
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff8c50,#20e8c0)"></span>\
        <span>Copper & Teal</span>\
      </button>\
      <button class="theme-option" data-theme="p13" onclick="setTheme('\''p13'\'')">\
        <span class="theme-swatch" style="background:linear-gradient(135deg,#50f0a0,#ff4080)"></span>\
        <span>Emerald & Crimson</span>\
      </button>\
      <button class="theme-option" data-theme="p14" onclick="setTheme('\''p14'\'')">\
        <span class="theme-swatch" style="background:linear-gradient(135deg,#c8ff64,#6040ff)"></span>\
        <span>Lime & Violet</span>\
      </button>\
      <button class="theme-option" data-theme="p15" onclick="setTheme('\''p15'\'')">\
        <span class="theme-swatch" style="background:linear-gradient(135deg,#ff7864,#00d4e0)"></span>\
        <span>Coral & Aqua
' "$file"
done

echo "All article pages updated with new themes!"
