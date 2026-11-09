/* Learning to Draw: the published sheets. One recipe per sheet; js/sheets.js draws it.
   Code = LD-<category letter><type 1–5>. Retire, don't delete: a replaced sheet gets retired: true and its code is never reused.
   inspired: historical artists and teachers only (no one living). */
window.LTD_CATALOG = [
  // A. Lines
  { cat: "A", type: 1, level: 1, title: "Bee to the flower", how: "Trace each line from the dot. Last row: on your own!", inspired: "Paul Klee, \"a line going for a walk\" (1925)" },
  { cat: "A", type: 2, level: 1, title: "Rain lines", how: "Top to bottom, like rain. Straight down, then slanted.", inspired: "Paul Klee, Pedagogical Sketchbook (1925)" },
  { cat: "A", type: 3, level: 1, title: "Over the mountains", how: "Up, down, up, down: sharp points at the top.", inspired: "Wassily Kandinsky, Point and Line to Plane (1926)" },
  { cat: "A", type: 4, level: 2, title: "Waves and loops", how: "Smooth waves, then loop-the-loops. Keep the pencil moving.", inspired: "Katsushika Hokusai's waves" },
  { cat: "A", type: 5, level: 2, title: "Snail spirals", how: "Start in the middle and go round and round.", inspired: "spirals in Celtic stone carvings" },
  // B. Shapes
  { cat: "B", type: 1, level: 1, title: "Circles", how: "Trace, then join the dots, then draw your own round the dot.", inspired: "Friedrich Fröbel's kindergarten gifts (1830s)" },
  { cat: "B", type: 2, level: 1, title: "Squares and rectangles", how: "Four straight sides and four corners.", inspired: "Piet Mondrian's rectangles" },
  { cat: "B", type: 3, level: 1, title: "Triangles", how: "Three sides, three points. Go corner to corner.", inspired: "Kazimir Malevich's shapes" },
  { cat: "B", type: 4, level: 2, title: "Diamonds and ovals", how: "A square standing on its point, and a stretched circle.", inspired: "Maria Montessori's metal insets" },
  { cat: "B", type: 5, level: 2, title: "Stars and hearts", how: "Stars go point to dip to point. Hearts are two curves.", inspired: "Henri Matisse's paper cut-outs" },
  // C. Connect the dots
  { cat: "C", type: 1, level: 1, title: "Dot-to-dot star", how: "Join 1 to 10, then back to 1. Then color it in.", inspired: "classic dot-to-dot puzzles" },
  { cat: "C", type: 2, level: 1, title: "Dot-to-dot house", how: "Join 1 to 12, then back to 1. Who lives here?", inspired: "classic dot-to-dot puzzles" },
  { cat: "C", type: 3, level: 2, title: "Dot-to-dot fish", how: "Join 1 to 15, then back to 1. Add some bubbles.", inspired: "classic dot-to-dot puzzles" },
  { cat: "C", type: 4, level: 3, title: "Dot-to-dot rocket", how: "Join 1 to 20, then back to 1. 3, 2, 1, blast off!", inspired: "classic dot-to-dot puzzles" },
  { cat: "C", type: 5, level: 2, title: "A to G sailboat", how: "Join the letters A, B, C … G, then back to A.", inspired: "classic dot-to-dot puzzles" },
  // D. Mirror
  { cat: "D", type: 1, level: 1, title: "Butterfly", how: "Finish the other half. Follow the grey dots.", inspired: "Ernst Haeckel, Art Forms in Nature (1904)" },
  { cat: "D", type: 2, level: 2, title: "Pine tree", how: "Finish the other half. The dots show the corners.", inspired: "Ernst Haeckel, Art Forms in Nature (1904)" },
  { cat: "D", type: 3, level: 2, title: "Funny face", how: "Finish the other half of the face.", inspired: "Giuseppe Arcimboldo's faces" },
  { cat: "D", type: 4, level: 3, title: "Flower vase", how: "Finish the vase so both sides match.", inspired: "ancient Greek vases" },
  { cat: "D", type: 5, level: 3, title: "Robot on the grid", how: "Count the dots across to match each line.", inspired: "Albrecht Dürer's drawing grid" },
  // E. Grid copy
  { cat: "E", type: 1, level: 1, title: "Kite", how: "Copy one square at a time. Start at the big dot.", inspired: "Albrecht Dürer's drawing frame (1525)" },
  { cat: "E", type: 2, level: 1, title: "House", how: "Look at each square, then draw the same in the big grid.", inspired: "Albrecht Dürer's drawing frame (1525)" },
  { cat: "E", type: 3, level: 2, title: "Cat face", how: "Find where each line starts and ends on the grid.", inspired: "Albrecht Dürer's drawing frame (1525)" },
  { cat: "E", type: 4, level: 3, title: "Car", how: "Copy the car square by square. Wheels last.", inspired: "Albrecht Dürer's drawing frame (1525)" },
  { cat: "E", type: 5, level: 3, title: "Sailboat", how: "Copy the boat and the waves, one square at a time.", inspired: "Albrecht Dürer's drawing frame (1525)" },
  // F. Letters
  { cat: "F", type: 1, level: 1, title: "Letters A to E", how: "Follow the numbers for each stroke. Trace, dots, then on your own.", inspired: "Edward Johnston's handwriting lessons (1906)" },
  { cat: "F", type: 2, level: 1, title: "Numbers 1 to 5", how: "Start at the big dot. Trace, dots, then on your own.", inspired: "Edward Johnston's handwriting lessons (1906)" },
  { cat: "F", type: 3, level: 2, title: "Fat block letters", how: "Draw a skinny letter, go all the way around it, color it in.", inspired: "Edward Johnston's block letters (1916)" },
  { cat: "F", type: 4, level: 2, title: "Bubble letters", how: "Like block letters, but with round ends. Go around the grey lines.", inspired: "circus posters of the 1800s" },
  { cat: "F", type: 5, level: 3, title: "3-D letters", how: "Draw the letter again, a little up and to the right. Shade the side.", inspired: "Victorian shop signs" },
  // G. 3-D
  { cat: "G", type: 1, level: 2, title: "Cube", how: "Two squares, join the corners, and it pops out.", inspired: "Filippo Brunelleschi's perspective (about 1415)" },
  { cat: "G", type: 2, level: 2, title: "Cylinder", how: "An oval, two lines down, a smile at the bottom.", inspired: "Paul Cézanne: \"the cylinder, the sphere, the cone\"" },
  { cat: "G", type: 3, level: 2, title: "Cone", how: "An oval, a dot on top, two lines to the dot.", inspired: "Paul Cézanne: \"the cylinder, the sphere, the cone\"" },
  { cat: "G", type: 4, level: 3, title: "Shading a ball", how: "Choose where the light is. Shade the far side and the shadow.", inspired: "Leonardo da Vinci's notes on light and shade" },
  { cat: "G", type: 5, level: 3, title: "The road far away", how: "Everything gets smaller as it goes to the dot.", inspired: "Filippo Brunelleschi's perspective (about 1415)" },
  // H. Shapes into things
  { cat: "H", type: 1, level: 1, title: "Draw a cat", how: "Follow the steps. The black lines are new each time.", inspired: "Théophile Steinlen's cats" },
  { cat: "H", type: 2, level: 1, title: "Draw a car", how: "A box, a roof, two wheels, windows, lights. Vroom!", inspired: "Edwardian motor-car posters" },
  { cat: "H", type: 3, level: 1, title: "Draw a house", how: "Square, roof, door, windows, chimney.", inspired: "Paul Klee's little houses" },
  { cat: "H", type: 4, level: 1, title: "Draw a fish", how: "Oval, tail, eye, fins, then scales and bubbles.", inspired: "Paul Klee, The Goldfish (1925)" },
  { cat: "H", type: 5, level: 2, title: "Draw a rocket", how: "Body, nose, window, fins, flames!", inspired: "Konstantin Tsiolkovsky's rocket sketches" },
  // I. Patterns
  { cat: "I", type: 1, level: 1, title: "Finish the borders", how: "Keep each pattern going to the end of the row.", inspired: "William Morris's borders" },
  { cat: "I", type: 2, level: 2, title: "Pattern pizza", how: "Fill each slice with the pattern that has its number.", inspired: "Gustav Klimt's patterns" },
  { cat: "I", type: 3, level: 1, title: "What comes next?", how: "Draw the next two shapes in each row.", inspired: "Friedrich Fröbel's pattern games" },
  { cat: "I", type: 4, level: 2, title: "Bricks and scales", how: "Keep the bricks and the fish scales going.", inspired: "Roman mosaics" },
  { cat: "I", type: 5, level: 3, title: "Quilt square", how: "Copy the striped squares onto the big grid.", inspired: "Amish quilts of the 1800s" },
  // J. Finish the picture
  { cat: "J", type: 1, level: 1, title: "Squiggle starters", how: "Turn each squiggle into something. Anything!", inspired: "Paul Klee's doodles" },
  { cat: "J", type: 2, level: 1, title: "Circles into things", how: "One is a sun. What will the others be?", inspired: "Joan Miró's circles" },
  { cat: "J", type: 3, level: 1, title: "Finish the faces", how: "Give every face eyes, a nose, a mouth and hair.", inspired: "Paul Klee, Senecio (1922)" },
  { cat: "J", type: 4, level: 1, title: "What's in the jar?", how: "Fill the jar with anything you like.", inspired: "Giorgio Morandi's jars" },
  { cat: "J", type: 5, level: 2, title: "Build a vehicle", how: "Here are the wheels. Draw a car, a bus, a truck … on top.", inspired: "Leonardo da Vinci's machine drawings" }
];
