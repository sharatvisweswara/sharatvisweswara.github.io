export function readingTime(body: string | undefined): number {
	if (!body) return 1;
	const text = body.replace(/<[^>]*>/g, ' ').replace(/[#*_`>\-\[\]\(\)!]/g, ' ');
	const words = text.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.round(words / 220));
	return minutes;
}
