from PIL import Image, ImageDraw, ImageFont, ImageOps
import os
import argparse

def get_default_font(size=36):
    try:
        # Try different system fonts
        font_paths = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",  # Linux
            "/usr/share/fonts/TTF/DejaVuSans.ttf",              # Some Linux
            "/System/Library/Fonts/Helvetica.ttc",              # macOS
            "C:\\Windows\\Fonts\\arial.ttf"                     # Windows
        ]
        
        for font_path in font_paths:
            if os.path.exists(font_path):
                return ImageFont.truetype(font_path, size)
        
        # If no system fonts found, use default
        return ImageFont.load_default()
    
    except Exception:
        return ImageFont.load_default()

def add_copyright(input_path, output_path, text="© 2024 YourName"):
    image = Image.open(input_path)
    draw = ImageDraw.Draw(image)
    
    # Add border
    border_color = "#Fac51c"
    border_width = 10
    image = ImageOps.expand(image, border=border_width, fill=border_color)
    
    # Add watermark with improved visibility
    font = get_default_font(size=48)  # Increased font size
    
    # Calculate text size for positioning
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    # Position text in bottom right with padding
    padding = 20
    text_position = (image.width - text_width - padding, 
                    image.height - text_height - padding)
    
    # Draw text shadow/outline for better visibility
    outline_color = "white"
    shadow_offset = 2
    for offset_x, offset_y in [(x,y) for x in [-1,1] for y in [-1,1]]:
        draw.text((text_position[0] + offset_x, text_position[1] + offset_y), 
                 text, font=font, fill=outline_color)
    
    # Draw main text
    draw.text(text_position, text, font=font, fill="black")
    
    image.save(output_path)

def main():
    parser = argparse.ArgumentParser(description='Add copyright and border to images')
    parser.add_argument('input_path', help='Path to the input image or directory')
    parser.add_argument('--text', default='© 2024 Ghafoor', help='Copyright text to add')
    args = parser.parse_args()

    if os.path.isfile(args.input_path):
        # Single file processing
        input_dir = os.path.dirname(args.input_path)
        basename = os.path.basename(args.input_path)
        # Create output directory next to the input file
        output_dir = os.path.join(input_dir, "output")
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, basename)
        add_copyright(args.input_path, output_path, args.text)
    elif os.path.isdir(args.input_path):
        # Create output directory inside the input directory
        output_dir = os.path.join(args.input_path, "output")
        os.makedirs(output_dir, exist_ok=True)
        # Directory processing
        for filename in os.listdir(args.input_path):
            if filename.endswith((".png", ".jpg", ".webp")):
                input_file = os.path.join(args.input_path, filename)
                output_file = os.path.join(output_dir, filename)
                add_copyright(input_file, output_file, args.text)

if __name__ == "__main__":
    main()
