import { User } from "../interfaces/UserInterfaces";
import { EXPERIENCE_CATEGORIES, EXPERIENCE_CATEGORIES_ORDER } from "../constants/userExperience";

export function isNumeric(str: string): boolean {
    if (typeof str !== "string") return false;
    const numericValue = parseFloat(str);
    return !isNaN(numericValue) && isFinite(numericValue);
}

export function round(number: number): number {
    return Math.round((number + Number.EPSILON) * 10) / 10;
}

export function calculateAge(dateOfBirth: string): number {
    const dobParts: number[] = dateOfBirth.split('/').map(Number);
    const dobDay: number = dobParts[0];
    const dobMonth: number = dobParts[1];
    const dobYear: number = dobParts[2];

    const today: Date = new Date();
    const birthDate: Date = new Date(dobYear, dobMonth - 1, dobDay); // Month is 0-based

    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDay)) {
        age--;
    }

    return age;
}

export function getIndustriesFromUsers(users: User[]) {
    const industries = [...new Set(users.map((user) => {
        if(user.industry === null || user.industry === "n/a"){
            return "not specified";
        }
        return user.industry;
    }))];

    return industries;
}

export function calculateAverageAgePerIndustry(users: User[]) {
    const industries = getIndustriesFromUsers(users);
    const averageAges = industries.map((industry) => {
        const usersInIndustry = users.filter((user) => user.industry === industry);
        const totalAge = usersInIndustry.reduce((sum, user) => sum + (user.date_of_birth ? calculateAge(user.date_of_birth) : 0), 0);
        const averageAge = round(totalAge / usersInIndustry.length);

        return { industry, averageAge };
    });
    return averageAges;
}

export function calculateAverageSalaryPerIndustry(users: User[]) {
    const industries = getIndustriesFromUsers(users);
    const averageSalaries = industries.map((industry) => {
        const usersInIndustry = users.filter((user) => user.industry === industry);
        const totalSalary = usersInIndustry.reduce((sum, user) => sum + (user.salary ? user.salary : 0), 0);
        const averageSalary = round(totalSalary / usersInIndustry.length);

        return {industry, averageSalary};
    });
    
    return averageSalaries;
}

export function categorizeByExperience(yoe: number) {
    if (yoe <= 2) {
        return EXPERIENCE_CATEGORIES.ZERO_TO_TWO_YEARS;
    } else if (yoe >= 3 && yoe <= 5) {
        return EXPERIENCE_CATEGORIES.THREE_TO_FIVE_YEARS;
    } else if (yoe >= 5 && yoe <= 7) {
        return EXPERIENCE_CATEGORIES.FIVE_TO_SEVEN_YEARS;
    } else if (yoe >= 7 && yoe <= 10) {
        return EXPERIENCE_CATEGORIES.SEVEN_TO_TEN_YEARS;
    } else {
        return EXPERIENCE_CATEGORIES.TEN_PLUS_YEARS;
    }
} 

export function createCategoryMap(users: User[]) {
    const categoryMap: Record<string, { totalSalary: number; userCount: number }> = {};

    users.forEach((user) => {
        if (user.years_of_experience !== null && user.salary !== null) {
        const yoe = user.years_of_experience;
        const category = categorizeByExperience(yoe);
        if (!(category in categoryMap)) {
            categoryMap[category] = { totalSalary: 0, userCount: 0 };
        }
        categoryMap[category].totalSalary += user.salary;
        categoryMap[category].userCount++;
        }
    });

    return categoryMap;
}

export function calculateAverageSalaryPerYoe(users: User[]) {
    
    const categoryMap = createCategoryMap(users);

    const categories: string[] = EXPERIENCE_CATEGORIES_ORDER.filter((category) => category in categoryMap);
    const avgSalaries: number[] = categories.map((category) =>
        round(categoryMap[category].totalSalary / categoryMap[category].userCount)
    );

    return { categories, avgSalaries };
}