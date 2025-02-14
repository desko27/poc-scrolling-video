ffprobe -show_frames $1 | grep -E "key_frame|pict_type" | awk '
/key_frame=1/ {
  if (last_keyframe != 0) {
    print "GOP size:", NR/2 - last_keyframe
  }
  last_keyframe = NR/2
}
'
