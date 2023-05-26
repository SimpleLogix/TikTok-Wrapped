export interface Stats {
    user: string
    join_date: string
    total_videos: number
    mins_scrolled: number
    hours_scrolled: number
    days_scrolled: number
    hours_per_sesh: number
    times_opened_app: number
}

export const EMPTY_STATS: Stats = {
    user: "",
    join_date: "",
    total_videos: 0,
    mins_scrolled: 0,
    hours_scrolled: 0,
    days_scrolled: 0,
    hours_per_sesh: 0,
    times_opened_app: 0,
}

// calculate all user stats from raw data (string)
export function calculateStats(json: any): Stats {
    // convert date to proper format
    return {
        user: json.user,
        join_date: formatDate(json.join_date),
        total_videos: json.total_videos,
        mins_scrolled: json.hours_scrolled * 60,
        hours_scrolled: json.hours_scrolled,
        days_scrolled: json.hours_scrolled / 24,
        hours_per_sesh: json.hours_scrolled / json.times_opened_app,
        times_opened_app: json.times_opened_app,
    }
}


// converts raw STATS data into user stats
export function parseStats(rawStatsData: string): Stats {
    const json = JSON.parse(rawStatsData);
    return {
        user: json.user,
        join_date: json.join_date,
        total_videos: json.total_videos,
        mins_scrolled: json.mins_scrolled,
        hours_scrolled: json.hours_scrolled,
        days_scrolled: json.days_scrolled,
        hours_per_sesh: json.hours_per_sesh,
        times_opened_app: json.times_opened_app,
    }
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
    const formattedDate = formatter.format(date);
    return formattedDate;
}