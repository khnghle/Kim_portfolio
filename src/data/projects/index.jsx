import { theme } from "../../theme";
import beeYou from "../../assets/work/beeYouMain.svg";
import healthcareManagement from "../../assets/work/healthcareManagementMain.svg";
import monkeyBuddy from "../../assets/work/monkeyBuddyMain.svg";

export const projectData = [
	{
		header: "Bee.You Therapy",
		navTitle: "Bee.You",
		description: "The only tool you need to track your mental health",
		image: beeYou,
		imageDescription: "Bee.You Screens",
		backgroundColor: theme.palette.green.main,
		link: "beeYou",
	},
	{
		header: "Healthcare Management",
		navTitle: "Healthcare Management",
		description: "Bridging the gap in Healthcare",
		image: healthcareManagement,
		imageDescription: "Healthcare Management Screens",
		backgroundColor: theme.palette.blue.main,
		link: "healthManagement",
	},
	{
		header: "Monkey Buddy",
		navTitle: "Monkey.Buddy",
		description: "Track your subscriptions in one place",
		image: monkeyBuddy,
		imageDescription: "Monkey Buddy Screens",
		backgroundColor: theme.palette.orange.main,
		link: "monkeyBuddy",
	},
];
