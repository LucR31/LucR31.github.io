import yaml

def add_card(path_pic:str,description:str)->None:
    return f"""<div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="{path_pic}">
                            <img src="{path_pic}" width="500">
                        </a>
                        <div class="desc"> {description}
                        </div>
                    </div>
                </div>     
            """

def add_section(title:str)->None:
    return f"""<div class="clearfix"></div>
               <div class="titles"><h3>{title}</h3>
               </div>"""

#============================================
    
html = """<!DOCTYPE html>
          <html lang="en">

          <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></script>
            <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="doc.css" rel="stylesheet">
          </head>
        """
html += """
            <div class="topnav">
                <a href="#home">Home</a>
                <a href="publications.html">Publications</a>
                <a href="about.html">About</a>
            </div>
       """
html+="""
        <div class="parallax" style="background-image: url('images/impressions/collatz_2.jpg');" > 
            <div class="title" style="font-family:'Courier New', Courier, monospace">
            <span class="mark_text">
                            <i><b>Projects<br>
                            & CAD-designs<br>
                            </i><b>
            </span></span>
            </div>
        </div>
      """

#==================================================
with open('cards.yaml','r') as f:
    dict_cards = yaml.safe_load(f)

for title in dict_cards.keys():
    html+=add_section(title)
    for path,description in dict_cards[title].items():
        html+=add_card(path,description)

html+='</body></html>'

with open('index.html','w') as f:
    f.write(html)
