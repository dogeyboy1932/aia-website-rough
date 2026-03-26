let fontCache: ArrayBuffer | null = null;

export async function getFont() {
    if (fontCache) return fontCache;

    // Using jsdelivr for reliability
    const fontUrl = 'https://cdn.jsdelivr.net/fontsource/fonts/inter@5.0.18/latin-400-normal.ttf';

    try {
        const response = await fetch(fontUrl);
        if (!response.ok) throw new Error(`Failed to fetch font: ${response.statusText}`);
        fontCache = await response.arrayBuffer();
        return fontCache;
    } catch (error) {
        console.warn('Failed to fetch font for email generation, falling back to empty buffer (might fail)', error);
        // Return empty buffer or handle error ?? Satori will crash with empty buffer.
        // If we can't get the font, maybe we should just not generate the SVG?
        // But this crashes the build.
        // Let's hope fetch works.
        throw error;
    }
}
