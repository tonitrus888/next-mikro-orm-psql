import { Test } from "@/entities/test.entity";
import { initORM } from "@/lib/mikro-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { test } = await initORM();
    const entities = await test.findAll();

    return NextResponse.json({ data: entities });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error: ", error }, { status: 500 });
  }
}

interface RequestData {
  value: string;
}

const isRequestData = (data: unknown): data is RequestData => {
  if (typeof data === "object" && data !== null) {
    return typeof (data as RequestData).value === "string";
  }
  return false;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!isRequestData(body)) {
      return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
    }

    const { em } = await initORM();
    const test = new Test(body.value);
    em.persist(test);
    await em.flush();

    return NextResponse.json({ message: "Test created", data: test }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error: ", error }, { status: 500 });
  }
}
