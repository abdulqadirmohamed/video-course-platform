import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

function CourseItem() {
  return (
    <>
    <Link href={`/courses/${1}`}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div>
              <div className="text-xl font-semibold">Learn TypeScript</div>
              <p className="text-xs font-light text-muted-foreground">
                By <span>Abdulqadir Mohamed</span>
              </p>
            </div>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-4 max-w-md text-sm text-muted-foreground">
            Master TypeScript and take your JavaScript development to the next
            level. This comprehensive course covers everything from TypeScript
            basics to advanced features, including type annotations, interfaces,
            generics, and decorators. Gain hands-on experience through practical
            projects and real-world examples, enabling you to write robust,
            maintainable, and scalable code with confidence. Ideal for both
            beginners and experienced developers looking to deepen their
            understanding of TypeScript.
          </p>
        </CardContent>
        <CardFooter>
          <div className="mt-3 flex w-full items-center justify-between gap-2">
            <span className="-mt-1.5 font-serif text-2xl">$15</span>

            <div className="mt-0.5 flex items-center gap-2">
              <span className="text-xs font-light text-muted-foreground">
                Category
              </span>
              <Badge variant="secondary">Typescript</Badge>
            </div>
          </div>
        </CardFooter>
      </Card>
      </Link>
    </>
  );
}

export default CourseItem;
