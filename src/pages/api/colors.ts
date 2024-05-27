export async function GET() {
  return new Response(
    JSON.stringify({
      colors: [
        "black",
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
      ],
    })
  );
}
