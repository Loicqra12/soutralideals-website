from pathlib import Path

path = Path("src/components/sections/CommunityTeaser.tsx")
text = path.read_text(encoding="utf-8")

div = "div"
motion_div = "motion.div"

text = text.replace("<" + motion_div + " className", "<" + div + " className")
text = text.replace("</" + motion_div + ">", "</" + div + ">")

text = text.replace(
    "<" + div + '\n        className="container-custom"',
    "<" + motion_div + '\n        className="container-custom"',
)
text = text.replace(
    "      </" + div + ">\n    </section>",
    "      </" + motion_div + ">\n    </section>",
)

path.write_text(text, encoding="utf-8")
print("CommunityTeaser fixed")
