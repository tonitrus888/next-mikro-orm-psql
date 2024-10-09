import { initORM } from "@/lib/mikro-orm";
import { NextRequest, NextResponse } from "next/server";

const isValidId = (id: string) => {
  return !isNaN(Number(id)) && Number.isInteger(Number(id)) && Number(id) > 0;
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!isValidId(params.id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const { test } = await initORM();
    const entity = await test.findOneOrFail(Number(params.id));

    return NextResponse.json({ data: entity });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error: ", error }, { status: 500 });
  }
}
